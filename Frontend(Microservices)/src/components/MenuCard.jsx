import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Box,
    Chip
} from "@mui/material";

import {
    Star,
    LocalDining
} from "@mui/icons-material";

import { addToCart } from "../api/cartApi";

export default function MenuCard({ item }) {

    const handleAddToCart = async () => {

        try {

            const userId =
                localStorage.getItem("userId");

            if (!userId) {

                alert("Please login first.");

                return;
            }

            const request = {

                userId: Number(userId),

                menuItemId: item.id,

                quantity: 1

            };

            await addToCart(request);

            alert(`${item.itemName} added to cart successfully`);

        }
        catch (error) {

            console.error(error);

            alert("Failed to add item to cart.");

        }

    };

    return (

        <Card
            sx={{
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 8
                }
            }}
        >

            <CardMedia
                component="img"
                height="180"
                image={
                    item.imageUrl ||
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
                }
                alt={item.itemName}
            />

            <CardContent>

                <Typography
                    variant="h6"
                    fontWeight="bold"
                >

                    {item.itemName}

                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        mt: 1,
                        minHeight: 45
                    }}
                >

                    {item.description}

                </Typography>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                >

                    <Chip
                        icon={<Star />}
                        label="4.5"
                        color="success"
                        size="small"
                    />

                    <Chip
                        icon={<LocalDining />}
                        label="Veg"
                        color="secondary"
                        size="small"
                    />

                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={3}
                >

                    <Typography
                        variant="h5"
                        color="primary"
                        fontWeight="bold"
                    >

                        ₹ {item.price}

                    </Typography>

                    <Button
                        variant="contained"
                        onClick={handleAddToCart}
                    >

                        + Add

                    </Button>

                </Box>

            </CardContent>

        </Card>

    );

}