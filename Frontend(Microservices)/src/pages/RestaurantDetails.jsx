import {
  Container,
  Typography,
  Divider,
  Grid,
  Box,
  Chip,
  Card,
  CardMedia,
  CircularProgress
} from "@mui/material";

import {
  Star,
  AccessTime,
  LocationOn,
  Restaurant
} from "@mui/icons-material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantById } from "../api/restaurantApi";
import { getRestaurantMenu } from "../api/menuApi";
import MenuCard from "../components/MenuCard";

export default function RestaurantDetails() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const restaurantData = await getRestaurantById(id);
      const menuData = await getRestaurantMenu(id);

      setRestaurant(restaurantData);
      setMenu(menuData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Card sx={{ borderRadius: 4, overflow: "hidden", mb: 5 }}>
        <CardMedia
          component="img"
          height="320"
          image={
            restaurant?.imageUrl ||
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200"
          }
        />

        <Box p={4}>
          <Typography variant="h3" fontWeight="bold">
            {restaurant?.restaurantName}
          </Typography>

          <Typography color="text.secondary" mt={1}>
            {restaurant?.cuisineType}
          </Typography>

          <Box display="flex" gap={2} mt={2} flexWrap="wrap">
            <Chip icon={<Star />} label="4.5 Rating" color="success" />
            <Chip icon={<AccessTime />} label="30 mins" color="primary" />
            <Chip icon={<Restaurant />} label="Pure Veg" color="secondary" />
          </Box>

          <Box display="flex" alignItems="center" mt={3}>
            <LocationOn color="error" />
            <Typography ml={1}>{restaurant?.address}</Typography>
          </Box>
        </Box>
      </Card>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        🍽 Menu
      </Typography>

      <Grid container spacing={3}>
        {menu.length === 0 ? (
          <Grid xs={12}>
            <Typography>No Menu Items Available</Typography>
          </Grid>
        ) : (
          menu.map((item) => (
            <Grid xs={12} md={6} key={item.id}>
              <MenuCard item={item} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}