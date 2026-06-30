function FoodCard({
  food,
  onAddToCart
}) {

  return (

    <div
      className="
      bg-white
      shadow-lg
      rounded-lg
      p-5
    "
    >

      <h2 className="text-2xl font-bold mb-2">
        {food.name}
      </h2>

      <p className="text-gray-600 mb-2">
        {food.description}
      </p>

      <p className="text-xl font-semibold mb-4">
        ₹ {food.price}
      </p>

      <button
        onClick={() => onAddToCart(food)}
        className="
        bg-black
        text-white
        px-4
        py-2
        rounded
      "
      >
        Add To Cart
      </button>

    </div>
  )
}

export default FoodCard