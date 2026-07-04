import {
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";

export default function AdminDashboard() {

    return (

        <Container sx={{ mt:4 }}>

            <Typography
                variant="h4"
                gutterBottom
            >

                Admin Dashboard

            </Typography>

            <Grid
                container
                spacing={3}
            >

                <Grid item xs={12} md={3}>

                    <Paper sx={{p:3}}>

                        <Typography
                            variant="h6"
                        >

                            Total Users

                        </Typography>

                        <Typography
                            variant="h4"
                        >

                            0

                        </Typography>

                    </Paper>

                </Grid>

                <Grid item xs={12} md={3}>

                    <Paper sx={{p:3}}>

                        <Typography
                            variant="h6"
                        >

                            Restaurants

                        </Typography>

                        <Typography
                            variant="h4"
                        >

                            0

                        </Typography>

                    </Paper>

                </Grid>

                <Grid item xs={12} md={3}>

                    <Paper sx={{p:3}}>

                        <Typography
                            variant="h6"
                        >

                            Orders

                        </Typography>

                        <Typography
                            variant="h4"
                        >

                            0

                        </Typography>

                    </Paper>

                </Grid>

                <Grid item xs={12} md={3}>

                    <Paper sx={{p:3}}>

                        <Typography
                            variant="h6"
                        >

                            Revenue

                        </Typography>

                        <Typography
                            variant="h4"
                        >

                            ₹0

                        </Typography>

                    </Paper>

                </Grid>

            </Grid>

        </Container>

    );

}