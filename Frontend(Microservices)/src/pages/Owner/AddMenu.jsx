import { Container, Paper, Typography, TextField, Button } from "@mui/material";

import { useState } from "react";

import { createMenuItem } from "../../api/menuApi";
import { useNavigate } from "react-router-dom";

export default function AddMenu() {
  const [menu, setMenu] = useState({
    itemName: "",

    description: "",

    price: "",
  });

  const handleChange = (e) => {
    setMenu({
      ...menu,

      [e.target.name]: e.target.value,
    });
  };

 const saveMenu =
    async () => {

        try {

            await createMenuItem({

                ...menu,

                restaurantId:
                    localStorage.getItem(
                        "restaurantId"
                    )

            });

            alert(
                "Menu Added Successfully"
            );

            navigate("/owner/menu");

        } catch (error) {

            console.error(error);

            alert(
                "Unable to add menu."
            );

        }

    };

  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4">Add Menu</Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Item Name"
          name="itemName"
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Price"
          name="price"
          onChange={handleChange}
        />

        <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={saveMenu}>
          Save
        </Button>
      </Paper>
    </Container>
  );
}
