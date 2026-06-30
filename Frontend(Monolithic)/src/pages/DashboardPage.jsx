function DashboardPage() {

  return (

    <div>

      <h1
        className="
        text-4xl
        font-bold
        mb-6
      "
      >
        Owner Dashboard
      </h1>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      "
      >

        <div
          className="
          bg-white
          shadow-lg
          rounded-lg
          p-6
        "
        >

          <h2 className="text-2xl font-bold mb-2">
            Restaurants
          </h2>

          <p>
            Manage restaurant details
          </p>

        </div>

        <div
          className="
          bg-white
          shadow-lg
          rounded-lg
          p-6
        "
        >

          <h2 className="text-2xl font-bold mb-2">
            Food Items
          </h2>

          <p>
            Manage menu items
          </p>

        </div>

      </div>

    </div>
  )
}

export default DashboardPage