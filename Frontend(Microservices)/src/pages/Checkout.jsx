import {
    Container,
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    Divider,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@mui/material";

import {
    useState,
    useEffect
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    getCartTotal
} from "../api/cartApi";

import {
    placeOrder
} from "../api/orderApi";

export default function Checkout() {

    const navigate = useNavigate();

    const userId =
        Number(localStorage.getItem("userId"));

    const restaurantId =
        Number(localStorage.getItem("restaurantId"));

    const [total,
        setTotal] =
        useState(0);

    const [checkout,
        setCheckout] =
        useState({

            fullName: "",

            mobile: "",

            address: "",

            paymentMethod: "COD"

        });

    useEffect(() => {

        loadTotal();

    }, []);

    const loadTotal =
        async () => {

            const amount =
                await getCartTotal(userId);

            setTotal(amount);

        };

    const handleChange =
        (e) => {

            setCheckout({

                ...checkout,

                [e.target.name]:
                e.target.value

            });

        };

    const handlePlaceOrder =
        async () => {

            try{

                const request={

                    userId,

                    restaurantId,

                    totalAmount:total,

                    items:[]
                };

                await placeOrder(request);

                alert(
                    "Order Placed Successfully"
                );

                navigate("/orders");

            }

            catch(error){

                console.error(error);

                alert(
                    "Unable to place order"
                );

            }

        };

    return(

        <Container
            maxWidth="lg"
            sx={{mt:5}}
        >

            <Grid
                container
                spacing={4}
            >

                <Grid
                    item
                    xs={12}
                    md={8}
                >

                    <Paper
                        sx={{
                            p:4
                        }}
                    >

                        <Typography
                            variant="h5"
                            gutterBottom
                        >

                            Delivery Details

                        </Typography>

                        <TextField

                            fullWidth

                            label="Full Name"

                            name="fullName"

                            margin="normal"

                            onChange={handleChange}

                        />

                        <TextField

                            fullWidth

                            label="Mobile Number"

                            name="mobile"

                            margin="normal"

                            onChange={handleChange}

                        />

                        <TextField

                            fullWidth

                            multiline

                            rows={4}

                            label="Delivery Address"

                            name="address"

                            margin="normal"

                            onChange={handleChange}

                        />

                        <FormControl
                            fullWidth
                            sx={{mt:2}}
                        >

                            <InputLabel>

                                Payment

                            </InputLabel>

                            <Select

                                name="paymentMethod"

                                value={
                                    checkout.paymentMethod
                                }

                                label="Payment"

                                onChange={handleChange}

                            >

                                <MenuItem value="COD">

                                    Cash On Delivery

                                </MenuItem>

                                <MenuItem value="UPI">

                                    UPI

                                </MenuItem>

                                <MenuItem value="CARD">

                                    Credit / Debit Card

                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Paper>

                </Grid>

                <Grid
                    item
                    xs={12}
                    md={4}
                >

                    <Paper
                        sx={{
                            p:4
                        }}
                    >

                        <Typography
                            variant="h5"
                        >

                            Order Summary

                        </Typography>

                        <Divider
                            sx={{my:2}}
                        />

                        <Typography>

                            Items Total

                            :

                            ₹ {total}

                        </Typography>

                        <Typography>

                            Delivery

                            :

                            ₹40

                        </Typography>

                        <Typography>

                            GST

                            :

                            ₹{(total*0.05).toFixed(2)}

                        </Typography>

                        <Divider
                            sx={{my:2}}
                        />

                        <Typography
                            variant="h6"
                        >

                            Grand Total

                            :

                            ₹{

                                (

                                    total+

                                    40+

                                    total*0.05

                                ).toFixed(2)

                            }

                        </Typography>

                        <Button

                            fullWidth

                            variant="contained"

                            size="large"

                            sx={{mt:3}}

                            onClick={
                                handlePlaceOrder
                            }

                        >

                            Place Order

                        </Button>

                    </Paper>

                </Grid>

            </Grid>

        </Container>

    );

}