import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip
} from "@mui/material";

import {
  Star,
  AccessTime,
  LocationOn
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 4,
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={
          restaurant?.imageUrl ||
          "https://images.unsplash.com/photo-1555992336-03a23c6f5b3a"
        }
        alt={restaurant?.restaurantName}
      />

      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {restaurant?.restaurantName}
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 1 }}>
          {restaurant?.cuisineType}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Chip icon={<Star />} label="4.5" color="success" size="small" />

          <Chip icon={<AccessTime />} label="30 mins" color="primary" size="small" />
        </Box>

        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <LocationOn color="error" fontSize="small" />

          <Typography variant="body2" sx={{ ml: 1 }}>
            {restaurant?.address}
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={() =>
            navigate(`/restaurants/${restaurant?.id}`)
          }
        >
          View Menu
        </Button>
      </CardContent>
    </Card>
  );
}