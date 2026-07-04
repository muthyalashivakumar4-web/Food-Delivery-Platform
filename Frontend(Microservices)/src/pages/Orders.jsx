import {
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    Grid,
    Box
} from "@mui/material";

import {
    AccessTime,
    CheckCircle,
    DeliveryDining,
    Cancel
} from "@mui/icons-material";

import {
    useEffect,
    useState
} from "react";

import {
    getUserOrders
} from "../api/orderApi";

export default function Orders() {

    const userId =
        Number(localStorage.getItem("userId"));

    const [orders,
        setOrders] =
        useState([]);

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders =
        async () => {

            try {

                const data =
                    await getUserOrders(userId);

                setOrders(data);

            }

            catch(error){

                console.error(error);

            }

        };

    const statusChip = (status) => {

        switch(status){

            case "PLACED":

                return <Chip color="primary" icon={<AccessTime/>} label={status}/>;

            case "CONFIRMED":

                return <Chip color="info" label={status}/>;

            case "PREPARING":

                return <Chip color="warning" label={status}/>;

            case "OUT_FOR_DELIVERY":

                return <Chip
                    color="secondary"
                    icon={<DeliveryDining/>}
                    label="Out For Delivery"
                />;

            case "DELIVERED":

                return <Chip
                    color="success"
                    icon={<CheckCircle/>}
                    label="Delivered"
                />;

            case "CANCELLED":

                return <Chip
                    color="error"
                    icon={<Cancel/>}
                    label="Cancelled"
                />;

            default:

                return <Chip label={status}/>;

        }

    };

    return (

        <Container
            maxWidth="lg"
            sx={{mt:5}}
        >

            <Typography
                variant="h4"
                gutterBottom
                fontWeight="bold"
            >

                My Orders

            </Typography>

            <Grid
                container
                spacing={3}
            >

                {

                    orders.map(order=>(

                        <Grid
                            item
                            xs={12}
                            md={6}
                            key={order.id}
                        >

                            <Card
                                sx={{
                                    borderRadius:3
                                }}
                            >

                                <CardContent>

                                    <Typography
                                        variant="h6"
                                    >

                                        Order #

                                        {order.id}

                                    </Typography>

                                    <Typography>

                                        Restaurant :

                                        {order.restaurantId}

                                    </Typography>

                                    <Typography>

                                        Amount :

                                        ₹{order.totalAmount}

                                    </Typography>

                                    <Typography>

                                        Ordered On :

                                        {

                                            new Date(
                                                order.orderTime
                                            ).toLocaleString()

                                        }

                                    </Typography>

                                    <Box mt={2}>

                                        {

                                            statusChip(
                                                order.status
                                            )

                                        }

                                    </Box>

                                </CardContent>

                            </Card>

                        </Grid>

                    ))

                }

            </Grid>

        </Container>

    );

}