import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Avatar
} from "@mui/material";

import {
    Link,
    useNavigate
} from "react-router-dom";

export default function MainLayout({ children }) {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");

    const logout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (

        <>

            <AppBar position="sticky">

                <Toolbar>

                    <Typography
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontWeight: "bold"
                        }}
                    >
                        🍔 Food Delivery
                    </Typography>

                    {
                        role === "CUSTOMER" && (

                            <>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/restaurants"
                                >
                                    Restaurants
                                </Button>

                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/cart"
                                >
                                    Cart
                                </Button>

                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/orders"
                                >
                                    Orders
                                </Button>
                            </>
                        )
                    }

                    {
                        role === "RESTAURANT_OWNER" && (

                            <>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/owner/restaurant"
                                >
                                    My Restaurant
                                </Button>

                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/owner/menu"
                                >
                                    Menu
                                </Button>

                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/owner/orders"
                                >
                                    Orders
                                </Button>
                            </>
                        )
                    }

                    {
                        role === "ADMIN" && (

                            <>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/admin/users"
                                >
                                    Users
                                </Button>

                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/admin/restaurants"
                                >
                                    Restaurants
                                </Button>
                            </>
                        )
                    }

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ml: 3
                        }}
                    >

                        <Avatar
                            sx={{
                                mr: 1
                            }}
                        >
                            {email?.charAt(0).toUpperCase()}
                        </Avatar>

                        <Typography
                            sx={{
                                mr: 2
                            }}
                        >
                            {email}
                        </Typography>

                        <Button
                            variant="contained"
                            color="error"
                            onClick={logout}
                        >
                            Logout
                        </Button>

                    </Box>

                </Toolbar>

            </AppBar>

            <Box
                sx={{
                    p: 3
                }}
            >
                {children}
            </Box>

        </>

    );

}