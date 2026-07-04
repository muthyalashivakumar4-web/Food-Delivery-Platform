import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Stack
} from "@mui/material";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  getRestaurantsByOwner,
  deleteRestaurant
} from "../../api/restaurantApi";

export default function MyRestaurant() {

  const navigate = useNavigate();

  const ownerId = localStorage.getItem("userId");

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    loadRestaurants();
  }, []);

  const loadRestaurants = async () => {

    try {

      const data = await getRestaurantsByOwner(ownerId);

      setRestaurants(data);

    } catch (err) {

      console.error(err);

      setRestaurants([]);

    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete Restaurant?"))
      return;

    await deleteRestaurant(id);

    loadRestaurants();

  };

  return (

    <Container sx={{ mt: 5 }}>

      <Stack
        direction="row"
        justifyContent="space-between"
        mb={4}
      >

        <Typography variant="h4">

          My Restaurants

        </Typography>

        <Button
          variant="contained"
          onClick={() =>
            navigate("/owner/restaurant/add")
          }
        >

          Add Restaurant

        </Button>

      </Stack>

      {restaurants.length === 0 ? (

        <Typography>

          No Restaurants Found

        </Typography>

      ) : (

        <Grid container spacing={3}>

          {restaurants.map((restaurant) => (

            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={restaurant.id}>

              <Card>

                <CardContent>

                  <Typography variant="h5">

                    {restaurant.restaurantName}

                  </Typography>

                  <Typography>

                    Owner : {restaurant.ownerName}

                  </Typography>

                  <Typography>

                    Email : {restaurant.email}

                  </Typography>

                  <Typography>

                    Mobile : {restaurant.mobile}

                  </Typography>

                  <Typography>

                    Address : {restaurant.address}

                  </Typography>

                  <Typography>

                    City : {restaurant.city}

                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mt: 2 }}
                  >

                    <Button
                      variant="contained"
                      onClick={() =>
                        navigate(
                          `/owner/restaurant/edit/${restaurant.id}`
                        )
                      }
                    >

                      Edit

                    </Button>

                    <Button
                      color="error"
                      variant="contained"
                      onClick={() =>
                        handleDelete(restaurant.id)
                      }
                    >

                      Delete

                    </Button>

                  </Stack>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      )}

    </Container>

  );

}