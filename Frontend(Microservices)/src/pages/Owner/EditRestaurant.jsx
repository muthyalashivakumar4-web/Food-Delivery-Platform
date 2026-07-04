import {
    Container,
    Paper,
    Typography,
    TextField,
    Button
} from "@mui/material";

import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    getRestaurantById,
    updateRestaurant
} from "../../api/restaurantApi";

export default function EditRestaurant() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [restaurant, setRestaurant] =
        useState({

            ownerId: Number(localStorage.getItem("userId")),

            restaurantName: "",

            ownerName: "",

            email: "",

            mobile: "",

            address: "",

            city: "",

            imageUrl: ""

        });

    useEffect(() => {

        loadRestaurant();

    }, []);

    const loadRestaurant = async () => {

        try {

            const data =
                await getRestaurantById(id);

            setRestaurant(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    const handleChange = (e) => {

        setRestaurant({

            ...restaurant,

            [e.target.name]:
                e.target.value

        });

    };

    const handleUpdate = async () => {

        try {

            await updateRestaurant(
                id,
                restaurant
            );

            alert(
                "Restaurant Updated Successfully"
            );

            navigate(
                "/owner/restaurant"
            );

        }

        catch (error) {

            console.error(error);

            alert(
                "Update Failed"
            );

        }

    };

    return (

        <Container maxWidth="sm">

            <Paper sx={{ p:4, mt:4 }}>

                <Typography
                    variant="h4"
                    gutterBottom
                >

                    Edit Restaurant

                </Typography>

                <TextField
                    fullWidth
                    label="Restaurant Name"
                    margin="normal"
                    name="restaurantName"
                    value={restaurant.restaurantName}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    label="Owner Name"
                    margin="normal"
                    name="ownerName"
                    value={restaurant.ownerName}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    value={restaurant.email}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    label="Mobile"
                    margin="normal"
                    name="mobile"
                    value={restaurant.mobile}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    label="Address"
                    margin="normal"
                    name="address"
                    value={restaurant.address}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    label="City"
                    margin="normal"
                    name="city"
                    value={restaurant.city}
                    onChange={handleChange}
                />

                <TextField
                    fullWidth
                    label="Image URL"
                    margin="normal"
                    name="imageUrl"
                    value={restaurant.imageUrl}
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt:3 }}
                    onClick={handleUpdate}
                >

                    Update Restaurant

                </Button>

            </Paper>

        </Container>

    );

}