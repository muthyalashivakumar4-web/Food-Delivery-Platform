import {
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
  Box
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getAllRestaurants } from "../api/restaurantApi";
import RestaurantCard from "../components/RestaurantCard";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    const filtered = restaurants.filter((restaurant) =>
      restaurant.restaurantName
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredRestaurants(filtered);
  }, [search, restaurants]);

  const fetchRestaurants = async () => {
    try {
      const data = await getAllRestaurants();
      setRestaurants(data);
      setFilteredRestaurants(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        🍴 Restaurants
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {filteredRestaurants.length} Restaurants Available
      </Typography>

      <TextField
        fullWidth
        placeholder="Search Restaurant..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={8}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredRestaurants.length === 0 ? (
            <Grid xs={12}>
              <Typography sx={{ m: 5 }}>
                No Restaurants Found.
              </Typography>
            </Grid>
          ) : (
            filteredRestaurants.map((restaurant) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}