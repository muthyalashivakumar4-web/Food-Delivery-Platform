import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
}
from "@mui/material";

import {
    People,
    Store,
    Receipt,
    CurrencyRupee
}
from "@mui/icons-material";

import {
    useEffect,
    useState
}
from "react";

import {
    getAllUsers,
    getAllRestaurants,
    getAllOrders
}
from "../../api/adminApi";

export default function Analytics() {

    const [stats,
        setStats] =
        useState({

            totalUsers: 0,

            totalRestaurants: 0,

            totalOrders: 0,

            totalRevenue: 0,

            recentOrders: []

        });

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard =
        async () => {

            try {

                const users =
                    await getAllUsers();

                const restaurants =
                    await getAllRestaurants();

                const orders =
                    await getAllOrders();

                const revenue =
                    orders.reduce(

                        (sum, order) =>

                            sum +
                            (order.totalAmount || 0),

                        0

                    );

                const sortedOrders =
                    [...orders].sort(

                        (a, b) =>

                            new Date(b.orderTime) -
                            new Date(a.orderTime)

                    );

                setStats({

                    totalUsers:
                        users.length,

                    totalRestaurants:
                        restaurants.length,

                    totalOrders:
                        orders.length,

                    totalRevenue:
                        revenue,

                    recentOrders:
                        sortedOrders.slice(0, 5)

                });

            }

            catch (error) {

                console.error(error);

                alert(
                    "Unable to load dashboard."
                );

            }

        };

    return (

        <Container
            maxWidth="lg"
            sx={{ mt: 4 }}
        >

            <Typography
                variant="h4"
                gutterBottom
            >

                Admin Analytics

            </Typography>

            <Grid
                container
                spacing={3}
            >

                <Grid item xs={12} md={3}>

                    <Card>

                        <CardContent>

                            <People
                                color="primary"
                                sx={{ fontSize: 50 }}
                            />

                            <Typography>

                                Total Users

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {stats.totalUsers}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid item xs={12} md={3}>

                    <Card>

                        <CardContent>

                            <Store
                                color="success"
                                sx={{ fontSize: 50 }}
                            />

                            <Typography>

                                Restaurants

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {stats.totalRestaurants}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid item xs={12} md={3}>

                    <Card>

                        <CardContent>

                            <Receipt
                                color="warning"
                                sx={{ fontSize: 50 }}
                            />

                            <Typography>

                                Orders

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {stats.totalOrders}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid item xs={12} md={3}>

                    <Card>

                        <CardContent>

                            <CurrencyRupee
                                color="error"
                                sx={{ fontSize: 50 }}
                            />

                            <Typography>

                                Revenue

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                ₹ {stats.totalRevenue}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

            <Typography
                variant="h5"
                sx={{
                    mt: 5,
                    mb: 2
                }}
            >

                Recent Orders

            </Typography>

            <TableContainer
                component={Paper}
            >

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>

                                Order ID

                            </TableCell>

                            <TableCell>

                                User ID

                            </TableCell>

                            <TableCell>

                                Restaurant ID

                            </TableCell>

                            <TableCell>

                                Amount

                            </TableCell>

                            <TableCell>

                                Status

                            </TableCell>

                            <TableCell>

                                Order Time

                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            stats.recentOrders.map(

                                order => (

                                    <TableRow
                                        key={order.id}
                                    >

                                        <TableCell>

                                            {order.id}

                                        </TableCell>

                                        <TableCell>

                                            {order.userId}

                                        </TableCell>

                                        <TableCell>

                                            {order.restaurantId}

                                        </TableCell>

                                        <TableCell>

                                            ₹ {order.totalAmount}

                                        </TableCell>

                                        <TableCell>

                                            {order.status}

                                        </TableCell>

                                        <TableCell>

                                            {

                                                new Date(
                                                    order.orderTime
                                                ).toLocaleString()

                                            }

                                        </TableCell>

                                    </TableRow>

                                )

                            )

                        }

                    </TableBody>

                </Table>

            </TableContainer>

        </Container>

    );

}