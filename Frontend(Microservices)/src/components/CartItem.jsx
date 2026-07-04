import {
    Card,
    CardContent,
    Typography,
    Button
}
from "@mui/material";

export default function CartItem({

    item,

    onRemove

}) {

    return (

        <Card
            sx={{ mb: 2 }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                >

                    {item.itemName}

                </Typography>

                <Typography>

                    Quantity :

                    {item.quantity}

                </Typography>

                <Typography>

                    ₹ {item.price}

                </Typography>

                <Button
                    color="error"
                    onClick={
                        () =>
                            onRemove(
                                item.id
                            )
                    }
                >

                    Remove

                </Button>

            </CardContent>

        </Card>
    );
}