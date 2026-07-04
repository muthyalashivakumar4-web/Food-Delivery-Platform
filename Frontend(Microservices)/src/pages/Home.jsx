import {
    Box,
    Typography,
    Button,
    Container
} from "@mui/material";

import {
    useNavigate
} from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (

        <Box
            sx={{
                height: "90vh",
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center"
            }}
        >

            <Container>

                <Typography
                    variant="h2"
                    color="white"
                    fontWeight="bold"
                >
                    Delicious Food
                </Typography>

                <Typography
                    variant="h5"
                    color="white"
                    sx={{
                        mt:2,
                        mb:4
                    }}
                >
                    Order food from your favourite restaurants.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() =>
                        navigate("/restaurants")
                    }
                >
                    Order Now
                </Button>

            </Container>

        </Box>

    );

}