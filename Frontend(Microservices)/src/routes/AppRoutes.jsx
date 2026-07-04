import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Restaurants from "../pages/Restaurants";
import RestaurantDetails from "../pages/RestaurantDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

import AdminUsers from "../pages/Admin/AdminUsers";
import AdminRestaurants from "../pages/Admin/AdminRestaurants";
import AdminDashboard from "../pages/Admin/AdminDashboard";

import MyRestaurant from "../pages/Owner/MyRestaurant";
import AddRestaurant from "../pages/Owner/AddRestaurant";
import EditRestaurant from "../pages/Owner/EditRestaurant";
import MenuManagement from "../pages/Owner/MenuManagement";
import AddMenu from "../pages/Owner/AddMenu";
import EditMenu from "../pages/Owner/EditMenu";
import RestaurantOrders from "../pages/Owner/RestaurantOrders";

import ProtectedRoute from "../components/ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ================= */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* ================= CUSTOMER ================= */}

        <Route
          path="/restaurants"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Restaurants />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/restaurants/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <RestaurantDetails />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Cart />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Checkout />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Orders />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* ================= OWNER ================= */}

        <Route
          path="/owner/restaurant"
          element={
            <ProtectedRoute>
              <MainLayout>
                <MyRestaurant />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/restaurant/add"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AddRestaurant />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/restaurant/edit/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <EditRestaurant />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/menu"
          element={
            <ProtectedRoute>
              <MainLayout>
                <MenuManagement />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/menu/add"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AddMenu />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/menu/edit/:id"
          element={
            <ProtectedRoute>
              <MainLayout>
                <EditMenu />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/orders"
          element={
            <ProtectedRoute>
              <MainLayout>
                <RestaurantOrders />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AdminUsers />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/restaurants"
          element={
            <ProtectedRoute>
              <MainLayout>
                <AdminRestaurants />
              </MainLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}