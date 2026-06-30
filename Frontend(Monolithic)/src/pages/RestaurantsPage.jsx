import {
  useEffect,
  useState
} from "react"

import RestaurantCard
  from "../components/RestaurantCard"

import {
  getRestaurants
} from "../services/restaurantService"

function RestaurantsPage() {

  const [restaurants, setRestaurants] =
    useState([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState("")

  useEffect(() => {

    const fetchRestaurants = async () => {

      try {

        const data =
          await getRestaurants()

        setRestaurants(
          Array.isArray(data)
            ? data
            : []
        )

      } catch (err) {

        console.error(err)

        setError(
          "Failed to load restaurants"
        )

      } finally {

        setLoading(false)
      }
    }

    fetchRestaurants()

  }, [])

  if (loading) {

    return (
      <div
        className="
          flex
          justify-center
          items-center
          h-screen
        "
      >
        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Loading...
        </h1>
      </div>
    )
  }

  if (error) {

    return (
      <div
        className="
          flex
          justify-center
          items-center
          h-screen
        "
      >
        <h1
          className="
            text-red-500
            text-2xl
            font-semibold
          "
        >
          {error}
        </h1>
      </div>
    )
  }

  return (

    <div className="p-6">

      <h1
        className="
          text-4xl
          font-bold
          mb-8
        "
      >
        Restaurants
      </h1>

      {
        restaurants.length === 0 ? (

          <h2
            className="
              text-2xl
              text-gray-500
            "
          >
            No Restaurants Available
          </h2>

        ) : (

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
              restaurants.map((restaurant) => (

                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />

              ))
            }

          </div>

        )
      }

    </div>
  )
}

export default RestaurantsPage