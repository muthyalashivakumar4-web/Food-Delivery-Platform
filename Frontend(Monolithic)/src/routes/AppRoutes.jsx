import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import HomePage
  from "../pages/HomePage"

import LoginPage
  from "../pages/LoginPage"

import RegisterPage
  from "../pages/RegisterPage"

import ProtectedRoute
  from "./ProtectedRoute"

import MainLayout
  from "../layouts/MainLayout"

// =========================
// DASHBOARDS
// =========================

import DashboardPage
  from "../pages/DashboardPage"

import AdminDashboardPage
  from "../pages/AdminDashboardPage"

// =========================
// RESTAURANTS
// =========================

import RestaurantsPage
  from "../pages/RestaurantsPage"

import RestaurantDetailsPage
  from "../pages/RestaurantDetailsPage"

// =========================
// CART / ORDERS / CHECKOUT
// =========================

import CartPage
  from "../pages/CartPage"

import OrdersPage
  from "../pages/OrdersPage"

import CheckoutPage
  from "../pages/CheckoutPage"

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* =========================
            PUBLIC ROUTES
        ========================== */}

        <Route
          path="/"
          element={
            <MainLayout>

              <HomePage />

            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/restaurants"
          element={
            <MainLayout>

              <RestaurantsPage />

            </MainLayout>
          }
        />

        <Route
          path="/restaurant/:id"
          element={
            <MainLayout>

              <RestaurantDetailsPage />

            </MainLayout>
          }
        />

        {/* =========================
            OWNER DASHBOARD
        ========================== */}

        <Route
          path="/dashboard"
          element={

            <ProtectedRoute
              allowedRoles={["OWNER"]}
            >

              <MainLayout>

                <DashboardPage />

              </MainLayout>

            </ProtectedRoute>
          }
        />

        {/* =========================
            CART
        ========================== */}

        <Route
          path="/cart"
          element={

            <ProtectedRoute
              allowedRoles={[
                "CUSTOMER",
                "OWNER",
                "ADMIN"
              ]}
            >

              <MainLayout>

                <CartPage />

              </MainLayout>

            </ProtectedRoute>
          }
        />

        {/* =========================
            ORDERS
        ========================== */}

        <Route
          path="/orders"
          element={

            <ProtectedRoute
              allowedRoles={[
                "CUSTOMER",
                "OWNER",
                "ADMIN"
              ]}
            >

              <MainLayout>

                <OrdersPage />

              </MainLayout>

            </ProtectedRoute>
          }
        />

        {/* =========================
            CHECKOUT
        ========================== */}

        <Route
          path="/checkout"
          element={

            <ProtectedRoute
              allowedRoles={[
                "CUSTOMER",
                "OWNER",
                "ADMIN"
              ]}
            >

              <MainLayout>

                <CheckoutPage />

              </MainLayout>

            </ProtectedRoute>
          }
        />

        {/* =========================
            ADMIN DASHBOARD
        ========================== */}

        <Route
          path="/admin"
          element={

            <ProtectedRoute
              allowedRoles={["ADMIN"]}
            >

              <MainLayout>

                <AdminDashboardPage />

              </MainLayout>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes