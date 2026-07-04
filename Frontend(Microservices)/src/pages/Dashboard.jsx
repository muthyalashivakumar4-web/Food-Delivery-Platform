import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Box,
} from "@mui/material";

import {
  Restaurant,
  ShoppingCart,
  Receipt,
  Store,
  RestaurantMenu,
  People,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const role = localStorage.getItem("role")?.replace("ROLE_", "");

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box display="flex" alignItems="center" mb={5}>
        <Avatar
          sx={{
            width: 70,
            height: 70,
            mr: 3,
            bgcolor: "primary.main",
          }}
        >
          {email?.charAt(0).toUpperCase()}
        </Avatar>

        <Box>
          <Typography variant="h4">Welcome</Typography>

          <Typography>{email}</Typography>

          <Typography color="primary">{role}</Typography>
        </Box>
      </Box>

      {/* CUSTOMER */}

      {role === "CUSTOMER" && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Restaurant sx={{ fontSize: 50 }} color="primary" />

                <Typography variant="h6">
                  Restaurants
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => navigate("/restaurants")}
                >
                  View Restaurants
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <ShoppingCart sx={{ fontSize: 50 }} color="success" />

                <Typography variant="h6">
                  Cart
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 2 }}
                  onClick={() => navigate("/cart")}
                >
                  Open Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Receipt sx={{ fontSize: 50 }} color="warning" />

                <Typography variant="h6">
                  Orders
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  sx={{ mt: 2 }}
                  onClick={() => navigate("/orders")}
                >
                  My Orders
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* OWNER */}

      {role === "OWNER" && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Store sx={{ fontSize: 50 }} color="primary" />

                <Typography variant="h6">
                  My Restaurant
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    navigate("/owner/restaurant")
                  }
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <RestaurantMenu
                  sx={{ fontSize: 50 }}
                  color="success"
                />

                <Typography variant="h6">
                  Menu Management
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    navigate("/owner/menu")
                  }
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Receipt
                  sx={{ fontSize: 50 }}
                  color="warning"
                />

                <Typography variant="h6">
                  Orders
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    navigate("/owner/orders")
                  }
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* ADMIN */}

      {role === "ADMIN" && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Receipt
                  sx={{ fontSize: 50 }}
                  color="warning"
                />

                <Typography variant="h6">
                  Dashboard
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  color="warning"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    navigate("/admin/dashboard")
                  }
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <People
                  sx={{ fontSize: 50 }}
                  color="primary"
                />

                <Typography variant="h6">
                  Users
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    navigate("/admin/users")
                  }
                >
                  Manage
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Store
                  sx={{ fontSize: 50 }}
                  color="success"
                />

                <Typography variant="h6">
                  Restaurants
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 2 }}
                  onClick={() =>
                    navigate("/admin/restaurants")
                  }
                >
                  Manage
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}