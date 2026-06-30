import { Link } from "react-router-dom"

function RestaurantCard({ restaurant }) {

  return (

    <div
      className="
      bg-white
      shadow-lg
      rounded-lg
      overflow-hidden
      hover:scale-105
      transition
      duration-300
    "
    >

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-2">
          {restaurant.name}
        </h2>

        <p className="text-gray-600 mb-2">
          {restaurant.location}
        </p>

        <p className="mb-4">
          ⭐ {restaurant.rating}
        </p>

        <Link
          to={`/restaurant/${restaurant.id}`}
          className="
          bg-black
          text-white
          px-4
          py-2
          rounded
        "
        >
          View Menu
        </Link>

      </div>

    </div>
  )
}

export default RestaurantCard