import {
  useForm
} from "react-hook-form"

import {
  useNavigate
} from "react-router-dom"

import api from "../api/axios"

function LoginPage() {

  const navigate =
    useNavigate()

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit =
    async (data) => {

      try {

        const response =
          await api.post(
            "/auth/login",
            data
          )

        const token =
          response.data.token

        const role =
          response.data.role

        localStorage.setItem(
          "token",
          token
        )

        localStorage.setItem(
          "role",
          role
        )

        alert(
          "Login Successful"
        )

        // =========================
        // ROLE-BASED REDIRECTION
        // =========================

        if (role === "ADMIN") {

          navigate("/admin")

        } else if (
          role === "OWNER"
        ) {

          navigate("/dashboard")

        } else {

          navigate("/restaurants")
        }

      } catch (error) {

        console.log(error)

        alert(
          "Login Failed"
        )
      }
    }

  return (

    <div
      className="
      flex
      justify-center
      items-center
      h-screen
    "
    >

      <form
        onSubmit={
          handleSubmit(onSubmit)
        }
        className="
        bg-white
        shadow-lg
        p-8
        rounded
        w-96
      "
      >

        <h1
          className="
          text-3xl
          mb-6
          font-bold
        "
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="
          border
          p-2
          w-full
          mb-4
        "
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          className="
          border
          p-2
          w-full
          mb-4
        "
          {...register("password")}
        />

        <button
          className="
          bg-black
          text-white
          p-2
          w-full
        "
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default LoginPage