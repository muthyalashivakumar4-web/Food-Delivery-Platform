import {
  useEffect,
  useState
} from "react"

import {
  useParams,
  useNavigate
} from "react-router-dom"

import {
  useDispatch
} from "react-redux"

import {
  getFoodByRestaurant
} from "../services/foodService"

import {
  addToCart
} from "../features/cartSlice"

import FoodCard
  from "../components/FoodCard"

function RestaurantDetailsPage() {

  const { id } = useParams()

  const navigate =
    useNavigate()

  const dispatch =
    useDispatch()

  const [foods, setFoods] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  useEffect(() => {

    const fetchFoods = async () => {

      try {

        const data =
          await getFoodByRestaurant(id)

        setFoods(data)

      } catch (err) {

        console.log(err)

        setError(
          "Failed to load menu"
        )

      } finally {

        setLoading(false)
      }
    }

    fetchFoods()

  }, [id])

  const handleAddToCart =
    (food) => {

      const token =
        localStorage.getItem("token")

      if (!token) {

        alert(
          "Please login first"
        )

        navigate("/login")

        return
      }

      dispatch(
        addToCart(food)
      )

      alert(
        `${food.name} added to cart`
      )
    }

  if (loading) {

    return (
      <h1 className="text-3xl">
        Loading...
      </h1>
    )
  }

  if (error) {

    return (
      <h1 className="text-red-500 text-2xl">
        {error}
      </h1>
    )
  }

  return (

    <div>

      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        Restaurant Menu
      </h1>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
      >

        {
          foods.map((food) => (

            <FoodCard
              key={food.id}
              food={food}
              onAddToCart={
                handleAddToCart
              }
            />

          ))
        }

      </div>

    </div>
  )
}

export default RestaurantDetailsPage