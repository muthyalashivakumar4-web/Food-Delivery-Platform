import { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function RestaurantForm({
  onSubmit,
  initialData
}) {
  const [form, setForm] = useState({
    restaurantName: "",
    cuisineType: "",
    address: "",
    imageUrl: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          name="restaurantName"
          label="Restaurant Name"
          value={form.restaurantName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="cuisineType"
          label="Cuisine Type"
          value={form.cuisineType}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="address"
          label="Address"
          value={form.address}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="imageUrl"
          label="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          fullWidth
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </Box>
    </form>
  );
}