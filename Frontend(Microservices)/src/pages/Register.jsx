import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../api/authApi";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser(formData);

      console.log("Registration Success", response);

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper
        elevation={5}
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <FormControl
            fullWidth
            margin="normal"
          >
            <InputLabel>
              Role
            </InputLabel>

            <Select
              name="role"
              value={formData.role}
              label="Role"
              onChange={handleChange}
            >
              <MenuItem value="ROLE_ADMIN">
                ROLE_ADMIN
              </MenuItem>

              <MenuItem value="ROLE_OWNER">
                ROLE_OWNER
              </MenuItem>

              <MenuItem value="ROLE_CUSTOMER">
                ROLE_CUSTOMER
              </MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </form>

        <Typography
          align="center"
          sx={{ mt: 3 }}
        >
          Already have an account?{" "}
          <Link to="/login">
            Login Here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}