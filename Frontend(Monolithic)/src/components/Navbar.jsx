import {
  Link,
  useNavigate
} from "react-router-dom"

import {
  useSelector
} from "react-redux"

function Navbar() {

  const navigate =
    useNavigate()

  const token =
    localStorage.getItem("token")

  const totalQuantity =
    useSelector(
      state => state.cart.totalQuantity
    )

  const logout = () => {

    localStorage.removeItem("token")

    navigate("/login")
  }

  return (

    <nav
      className="
      bg-black
      text-white
      px-8
      py-4
      flex
      justify-between
      items-center
    "
    >

      <Link
        to="/"
        className="text-2xl font-bold"
      >
        FoodApp
      </Link>

      <div
        className="
        flex
        gap-6
        items-center
      "
      >

        <Link to="/">
          Home
        </Link>

        <Link to="/restaurants">
          Restaurants
        </Link>

        {
          token && (
            <>
              <Link to="/cart">

                Cart ({totalQuantity})

              </Link>

              <Link to="/orders">
                Orders
              </Link>

              <Link to="/dashboard">
                Dashboard
              </Link>
            </>
          )
        }

        {
          !token ? (

            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>

          ) : (

            <button
              onClick={logout}
              className="
              bg-red-500
              px-4
              py-2
              rounded
            "
            >
              Logout
            </button>
          )
        }

      </div>

    </nav>
  )
}

export default Navbar