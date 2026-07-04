import {
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from "@mui/material";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
    createRestaurant
} from "../../api/restaurantApi";

export default function AddRestaurant() {

    const navigate = useNavigate();

    const [restaurant, setRestaurant] = useState({

        ownerId: Number(
            localStorage.getItem("userId")
        ),

        restaurantName: "",

        ownerName: "",

        email:
            localStorage.getItem("email"),

        mobile: "",

        address: "",

        city: "",

        imageUrl: ""

    });

    const handleChange = (e) => {

        setRestaurant({

            ...restaurant,

            [e.target.name]:
                e.target.value

        });

    };

    const handleSave = async () => {

        try {

            await createRestaurant(
                restaurant
            );

            alert(
                "Restaurant Created Successfully"
            );

            navigate(
                "/owner/restaurant"
            );

        }

        catch (error) {

            console.error(error);

            alert(
                "Failed to Create Restaurant"
            );

        }

    };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ p:4, mt:4 }}>

                <Typography
                    variant="h4"
                >

                    Add Restaurant

                </Typography>

                <TextField
                    fullWidth
                    margin="normal"
                    label="Restaurant Name"
                    name="restaurantName"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Owner Name"
                    name="ownerName"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Mobile"
                    name="mobile"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Address"
                    name="address"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="City"
                    name="city"
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    margin="normal"
                    label="Image URL"
                    name="imageUrl"
                    onChange={handleChange}
                />

                <Button

                    variant="contained"

                    fullWidth

                    sx={{ mt:3 }}

                    onClick={handleSave}

                >

                    Save Restaurant

                </Button>

            </Paper>

        </Container>

    );

}