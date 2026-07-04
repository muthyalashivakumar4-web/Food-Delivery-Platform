import {
    Box,
    Typography
} from "@mui/material";

export default function Footer() {

    return (

        <Box
            sx={{
                mt: 5,
                p: 2,
                textAlign: "center",
                bgcolor: "#f5f5f5"
            }}
        >

            <Typography>

                © 2026 Food Delivery Platform

            </Typography>

        </Box>

    );
}