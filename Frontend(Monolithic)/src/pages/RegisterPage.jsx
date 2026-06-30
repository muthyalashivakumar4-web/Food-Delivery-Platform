import { useForm } from "react-hook-form"
import api from "../api/axios"

function RegisterPage() {

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {

    try {

      await api.post(
        "/auth/register",
        data
      )

      alert("Registration Successful")

    } catch (error) {

      console.log(error)

      alert("Registration Failed")
    }
  }

  return (

    <div className="flex justify-center items-center h-screen">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg p-8 rounded w-96"
      >

        <h1 className="text-3xl mb-6 font-bold">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          {...register("name")}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          {...register("password")}
        />

        <select
          className="border p-2 w-full mb-4"
          {...register("role")}
        >

          <option value="CUSTOMER">
            CUSTOMER
          </option>

          <option value="OWNER">
            OWNER
          </option>

          <option value="ADMIN">
            ADMIN
          </option>

        </select>

        <button
          className="bg-black text-white p-2 w-full"
        >
          Register
        </button>

      </form>

    </div>
  )
}

export default RegisterPage