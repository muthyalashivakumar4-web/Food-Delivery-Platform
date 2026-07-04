import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { loginSuccess } from "../redux/auth/authSlice";
import { loginUser } from "../api/authApi";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await loginUser(loginData);

      localStorage.setItem("token", response.accessToken);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("email", loginData.email);
      localStorage.setItem("role", response.role);

      dispatch(
        loginSuccess({
          token: response.accessToken,
          role: response.role,
        })
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Invalid Email or Password"
      );
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={5}
        sx={{
          mt: 8,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          Login
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={loginData.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography
          align="center"
          sx={{ mt: 3 }}
        >
          Don't have an account?{" "}
          <Link to="/register">
            Register Here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
}