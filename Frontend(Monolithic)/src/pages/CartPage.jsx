import {
  useDispatch,
  useSelector
} from "react-redux"

import {
  useNavigate
} from "react-router-dom"

import {
  removeFromCart,
  clearCart
} from "../features/cartSlice"

function CartPage() {

  const dispatch =
    useDispatch()

  const navigate =
    useNavigate()

  const {
    items,
    totalPrice,
    totalQuantity
  } = useSelector(
    state => state.cart
  )

  return (

    <div
      className="
      max-w-5xl
      mx-auto
      p-6
    "
    >

      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        Cart
      </h1>

      {
        items.length === 0 ? (

          <div
            className="
            bg-white
            shadow-md
            rounded-lg
            p-10
            text-center
          "
          >

            <h2 className="text-2xl mb-4">
              Cart is empty
            </h2>

            <button
              onClick={() =>
                navigate("/restaurants")
              }
              className="
              bg-black
              text-white
              px-6
              py-3
              rounded
            "
            >
              Browse Restaurants
            </button>

          </div>

        ) : (

          <div>

            {
              items.map((item) => (

                <div
                  key={item.id}
                  className="
                  bg-white
                  shadow-md
                  p-5
                  mb-4
                  rounded
                  flex
                  justify-between
                  items-center
                "
                >

                  <div>

                    <h2
                      className="
                      text-2xl
                      font-bold
                      mb-2
                    "
                    >
                      {item.name}
                    </h2>

                    <p className="mb-1">

                      Quantity:
                      {" "}
                      {item.quantity}

                    </p>

                    <p
                      className="
                      text-lg
                      font-semibold
                    "
                    >

                      ₹ {item.price}

                    </p>

                  </div>

                  <div
                    className="
                    flex
                    flex-col
                    gap-3
                    items-end
                  "
                  >

                    <p
                      className="
                      text-xl
                      font-bold
                    "
                    >

                      ₹
                      {" "}
                      {item.price * item.quantity}

                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                      className="
                      bg-red-500
                      text-white
                      px-4
                      py-2
                      rounded
                    "
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

            <div
              className="
              bg-white
              shadow-lg
              rounded-lg
              p-6
              mt-8
            "
            >

              <h2
                className="
                text-3xl
                font-bold
                mb-6
              "
              >
                Cart Summary
              </h2>

              <div className="mb-3">

                <span
                  className="
                  text-xl
                  font-semibold
                "
                >
                  Total Items:
                </span>

                <span className="ml-2 text-xl">

                  {totalQuantity}

                </span>

              </div>

              <div className="mb-8">

                <span
                  className="
                  text-2xl
                  font-bold
                "
                >
                  Total Price:
                </span>

                <span
                  className="
                  ml-2
                  text-2xl
                  font-bold
                "
                >

                  ₹ {totalPrice}

                </span>

              </div>

              <div
                className="
                flex
                gap-4
              "
              >

                <button
                  onClick={() =>
                    dispatch(clearCart())
                  }
                  className="
                  bg-black
                  text-white
                  px-6
                  py-3
                  rounded
                "
                >
                  Clear Cart
                </button>

                <button
                  onClick={() =>
                    navigate("/checkout")
                  }
                  className="
                  bg-green-600
                  text-white
                  px-6
                  py-3
                  rounded
                "
                >
                  Proceed To Checkout
                </button>

              </div>

            </div>

          </div>
        )
      }

    </div>
  )
}

export default CartPage