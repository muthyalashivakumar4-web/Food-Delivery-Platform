import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions
} from "@mui/material";

import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    getRestaurantMenu,
    deleteMenuItem
} from "../../api/menuApi";

export default function MenuManagement() {

    const navigate =
        useNavigate();

    const restaurantId =
        localStorage.getItem("restaurantId");

    const [menuItems,
        setMenuItems] =
        useState([]);

    useEffect(() => {

        loadMenu();

    }, []);

    const loadMenu =
        async () => {

            try {

                const data =
                    await getRestaurantMenu(
                        restaurantId
                    );

                setMenuItems(data);

            } catch (error) {

                console.error(error);

                alert("Unable to load menu.");

            }

        };

    const deleteItem =
        async (id) => {

            if (
                !window.confirm(
                    "Delete this menu item?"
                )
            ) {

                return;

            }

            await deleteMenuItem(id);

            loadMenu();

        };

    return (

        <Container sx={{ mt: 4 }}>

            <Typography
                variant="h4"
                gutterBottom
            >

                Menu Management

            </Typography>

            <Button

                variant="contained"

                sx={{ mb: 3 }}

                onClick={() =>
                    navigate("/owner/menu/add")
                }

            >

                Add Menu Item

            </Button>

            <Grid
                container
                spacing={3}
            >

                {

                    menuItems.map(item => (

                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            key={item.id}
                        >

                            <Card>

                                <CardContent>

                                    <Typography
                                        variant="h6"
                                    >

                                        {item.itemName}

                                    </Typography>

                                    <Typography>

                                        ₹ {item.price}

                                    </Typography>

                                    <Typography>

                                        {item.description}

                                    </Typography>

                                </CardContent>

                                <CardActions>

                                    <Button

                                        variant="contained"

                                        color="warning"

                                        onClick={() =>
                                            navigate(
                                                `/owner/menu/edit/${item.id}`
                                            )
                                        }

                                    >

                                        Edit

                                    </Button>

                                    <Button

                                        variant="contained"

                                        color="error"

                                        onClick={() =>
                                            deleteItem(
                                                item.id
                                            )
                                        }

                                    >

                                        Delete

                                    </Button>

                                </CardActions>

                            </Card>

                        </Grid>

                    ))

                }

            </Grid>

        </Container>

    );

}