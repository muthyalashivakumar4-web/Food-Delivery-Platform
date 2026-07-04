import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from "@mui/material";

import { useEffect, useState } from "react";

import {
    getAllRestaurants,
    deleteRestaurant
} from "../../api/adminApi";

const AdminRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        loadRestaurants();
    }, []);

    const loadRestaurants = async () => {
        try {
            const data = await getAllRestaurants();
            setRestaurants(data);
        } catch (error) {
            console.error(error);
            alert("Failed to load restaurants");
        }
    };

    const removeRestaurant = async (id) => {
        if (!window.confirm("Delete this restaurant?")) return;

        try {
            await deleteRestaurant(id);
            loadRestaurants();
        } catch (error) {
            console.error(error);
            alert("Failed to delete restaurant");
        }
    };

    return (
        <Container sx={{ mt: 4 }}>

            <Typography variant="h4" gutterBottom>
                Manage Restaurants
            </Typography>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {restaurants.map((r) => (
                            <TableRow key={r.id}>
                                <TableCell>{r.id}</TableCell>
                                <TableCell>{r.name}</TableCell>
                                <TableCell>{r.location || "N/A"}</TableCell>

                                <TableCell>
                                    <Button
                                        color="error"
                                        variant="contained"
                                        onClick={() => removeRestaurant(r.id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </TableContainer>

        </Container>
    );
};

export default AdminRestaurants;