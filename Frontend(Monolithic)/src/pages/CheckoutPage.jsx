import {
  useSelector,
  useDispatch
} from "react-redux"

import {
  useNavigate
} from "react-router-dom"

import {
  clearCart
} from "../features/cartSlice"

import {
  placeOrder
} from "../services/orderService"

import {
  createPaymentOrder,
  verifyPayment
} from "../services/paymentService"

function CheckoutPage() {

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

  // =========================
  // PLACE ORDER + PAYMENT
  // =========================

  const handlePlaceOrder =
    async () => {

      if (items.length === 0) {

        alert(
          "Cart is empty"
        )

        return
      }

      try {

        // =========================
        // CREATE ORDER PAYLOAD
        // =========================

        const payload = {

          items: items.map(
            item => ({

              foodItemId: item.id,

              quantity: item.quantity
            })
          ),

          totalAmount:
            totalPrice
        }

        // =========================
        // SAVE ORDER IN DATABASE
        // =========================

        const orderResponse =
          await placeOrder(
            payload
          )

        // =========================
        // CREATE RAZORPAY ORDER
        // =========================

        const razorpayData =
          await createPaymentOrder(
            totalPrice
          )

        // =========================
        // RAZORPAY OPTIONS
        // =========================

        const options = {

          key:
            "rzp_test_SpX49oVNndzrZp",

          amount:
            razorpayData.amount,

          currency:
            razorpayData.currency,

          name:
            "FoodApp",

          description:
            "Food Order Payment",

          order_id:
            razorpayData.id,

          handler:
            async function (
              response
            ) {

              try {

                // =========================
                // VERIFY PAYMENT
                // =========================

                await verifyPayment({

                  razorpayOrderId:
                    response
                      .razorpay_order_id,

                  razorpayPaymentId:
                    response
                      .razorpay_payment_id,

                  razorpaySignature:
                    response
                      .razorpay_signature,

                  orderId:
                    orderResponse.id
                })

                alert(
                  "Payment Successful"
                )

                // =========================
                // CLEAR CART
                // =========================

                dispatch(
                  clearCart()
                )

                // =========================
                // REDIRECT
                // =========================

                navigate("/orders")

              } catch (error) {

                console.log(error)

                alert(
                  "Payment verification failed"
                )
              }
            },

          prefill: {

            name:
              "Customer",

            email:
              "customer@gmail.com"
          },

          theme: {

            color:
              "#000000"
          }
        }

        // =========================
        // OPEN RAZORPAY
        // =========================

        const rzp =
          new window.Razorpay(
            options
          )

        rzp.open()

      } catch (error) {

        console.log(error)

        alert(
          "Checkout failed"
        )
      }
    }

  return (

    <div
      className="
      max-w-4xl
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
        Checkout
      </h1>

      <div
        className="
        bg-white
        shadow-lg
        rounded-lg
        p-6
      "
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-6
        "
        >
          Order Summary
        </h2>

        {
          items.map((item) => (

            <div
              key={item.id}
              className="
              flex
              justify-between
              items-center
              border-b
              py-4
            "
            >

              <div>

                <h3
                  className="
                  text-xl
                  font-semibold
                "
                >
                  {item.name}
                </h3>

                <p>

                  Quantity:
                  {" "}
                  {item.quantity}

                </p>

              </div>

              <div
                className="
                text-lg
                font-bold
              "
              >

                ₹
                {" "}
                {item.price * item.quantity}

              </div>

            </div>

          ))
        }

        <div className="mt-8">

          <h2
            className="
            text-2xl
            mb-2
          "
          >

            Total Items:
            {" "}
            {totalQuantity}

          </h2>

          <h2
            className="
            text-3xl
            font-bold
            mb-6
          "
          >

            Total Price:
            {" "}
            ₹ {totalPrice}

          </h2>

          <button
            onClick={
              handlePlaceOrder
            }
            className="
            bg-black
            text-white
            px-8
            py-4
            rounded
            text-xl
            hover:bg-gray-800
          "
          >
            Pay & Place Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default CheckoutPage