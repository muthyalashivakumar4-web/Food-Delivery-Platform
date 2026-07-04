import {
    Container,
    Typography,
    Card,
    CardContent,
    Button,
    Grid,
    Box,
    Divider,
    Paper
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    getUserCart,
    getCartTotal,
    removeCartItem
} from "../api/cartApi";

export default function Cart() {

    const navigate = useNavigate();

    const userId =
        localStorage.getItem("userId");

    const [cart,
        setCart] =
        useState([]);

    const [total,
        setTotal] =
        useState(0);

    useEffect(() => {

        loadCart();

    }, []);

    const loadCart =
        async () => {

            try {

                const items =
                    await getUserCart(userId);

                setCart(items);

                const amount =
                    await getCartTotal(userId);

                setTotal(amount);

            }

            catch (error) {

                console.error(error);

            }

        };

    const removeItem =
        async (id) => {

            await removeCartItem(id);

            loadCart();

        };

    const deliveryCharge = 40;

    const gst = total * 0.05;

    const grandTotal =
        total +
        deliveryCharge +
        gst;

    return (

        <Container
            maxWidth="lg"
            sx={{ mt:5 }}
        >

            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
            >

                🛒 My Cart

            </Typography>

            <Grid
                container
                spacing={4}
            >

                <Grid
                    item
                    xs={12}
                    md={8}
                >

                    {

                        cart.length===0 ?

                        (

                            <Typography>

                                Cart is Empty

                            </Typography>

                        )

                        :

                        cart.map(item=>(

                            <Card
                                key={item.id}
                                sx={{
                                    mb:3,
                                    borderRadius:3
                                }}
                            >

                                <CardContent>

                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                    >

                                        <Box>

                                            <Typography
                                                variant="h6"
                                            >

                                                {item.itemName}

                                            </Typography>

                                            <Typography>

                                                Quantity :
                                                {item.quantity}

                                            </Typography>

                                            <Typography
                                                color="primary"
                                            >

                                                ₹ {item.price}

                                            </Typography>

                                        </Box>

                                        <Button
                                            color="error"
                                            startIcon={
                                                <DeleteIcon/>
                                            }
                                            onClick={()=>
                                                removeItem(item.id)
                                            }
                                        >

                                            Remove

                                        </Button>

                                    </Box>

                                </CardContent>

                            </Card>

                        ))

                    }

                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                >

                    <Paper
                        elevation={4}
                        sx={{
                            p:3,
                            borderRadius:4
                        }}
                    >

                        <Typography
                            variant="h5"
                            gutterBottom
                        >

                            Order Summary

                        </Typography>

                        <Divider sx={{mb:2}}/>

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            mb={2}
                        >

                            <Typography>

                                Items Total

                            </Typography>

                            <Typography>

                                ₹ {total.toFixed(2)}

                            </Typography>

                        </Box>

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            mb={2}
                        >

                            <Typography>

                                Delivery

                            </Typography>

                            <Typography>

                                ₹ {deliveryCharge}

                            </Typography>

                        </Box>

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            mb={2}
                        >

                            <Typography>

                                GST

                            </Typography>

                            <Typography>

                                ₹ {gst.toFixed(2)}

                            </Typography>

                        </Box>

                        <Divider/>

                        <Box
                            display="flex"
                            justifyContent="space-between"
                            mt={2}
                            mb={3}
                        >

                            <Typography
                                variant="h6"
                            >

                                Grand Total

                            </Typography>

                            <Typography
                                variant="h6"
                                color="primary"
                            >

                                ₹ {grandTotal.toFixed(2)}

                            </Typography>

                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={()=>
                                navigate("/checkout")
                            }
                        >

                            Proceed To Checkout

                        </Button>

                    </Paper>

                </Grid>

            </Grid>

        </Container>

    );

}