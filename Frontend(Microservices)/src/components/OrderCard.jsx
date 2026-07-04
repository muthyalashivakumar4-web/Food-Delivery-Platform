import {
    Card,
    CardContent,
    Typography,
    Chip,
    Button
}
from "@mui/material";

export default function OrderCard({

    order,

    onCancel

}) {

    return (

        <Card
            sx={{ mb:3 }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                >

                    Order # {order.id}

                </Typography>

                <Typography>

                    Restaurant :

                    {order.restaurantName}

                </Typography>

                <Typography>

                    Amount :

                    ₹ {order.totalAmount}

                </Typography>

                <Typography>

                    Status :

                </Typography>

                <Chip

                    label={order.status}

                    color="primary"

                />

                {

                    order.status !==
                    "DELIVERED"

                    &&

                    order.status !==
                    "CANCELLED"

                    &&

                    <Button

                        color="error"

                        sx={{ml:2}}

                        onClick={
                            ()=>onCancel(
                                order.id
                            )
                        }

                    >

                        Cancel

                    </Button>

                }

            </CardContent>

        </Card>

    );

}