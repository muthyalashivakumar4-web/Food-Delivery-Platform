function AdminDashboardPage() {

  return (

    <div>

      <h1
        className="
        text-4xl
        font-bold
        mb-6
      "
      >
        Admin Dashboard
      </h1>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
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
            Users
          </h2>

          <p>
            Manage all users
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
            Restaurants
          </h2>

          <p>
            Monitor restaurants
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
            Orders
          </h2>

          <p>
            View all orders
          </p>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboardPage