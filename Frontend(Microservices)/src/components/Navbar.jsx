import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box
} from "@mui/material";

import {
    Link,
    useNavigate
} from "react-router-dom";

export default function Navbar() {

    const navigate =
        useNavigate();

    const role =
        localStorage.getItem("role");

    const logout =
        () => {

            localStorage.clear();

            navigate("/login");
        };

    return (

        <AppBar position="static">

            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1
                    }}
                >

                    Food Delivery

                </Typography>

                <Box>

                    <Button
                        color="inherit"
                        component={Link}
                        to="/dashboard"
                    >
                        Dashboard
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        to="/restaurants"
                    >
                        Restaurants
                    </Button>

                    {
                        role === "CUSTOMER" &&

                        <Button
                            color="inherit"
                            component={Link}
                            to="/cart"
                        >
                            Cart
                        </Button>
                    }

                    {
                        role === "CUSTOMER" &&

                        <Button
                            color="inherit"
                            component={Link}
                            to="/orders"
                        >
                            Orders
                        </Button>
                    }

                    {
                        role === "RESTAURANT_OWNER" &&

                        <Button
                            color="inherit"
                            component={Link}
                            to="/owner/menu"
                        >
                            Manage Menu
                        </Button>
                    }

                    {
                        role === "ADMIN" &&

                        <Button
                            color="inherit"
                            component={Link}
                            to="/admin/users"
                        >
                            Users
                        </Button>
                    }

                    <Button
                        color="inherit"
                        onClick={logout}
                    >
                        Logout
                    </Button>

                </Box>

            </Toolbar>

        </AppBar>

    );
}