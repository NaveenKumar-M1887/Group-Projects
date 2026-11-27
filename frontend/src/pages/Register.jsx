import { useNavigate } from "react-router-dom";
import { Registerschema } from "../Components/Registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(Registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register succes")
        navigate("/",{
            state:data
        })
    }
    
return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Create Account
        </h1>
        <p className="text-gray-500 mt-2">
          Register to get started
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit1)} className="space-y-4">
        <div>
          <label htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2">
            Name
          </label>
          <input id="name" type="text" placeholder="Enter your name"  {...register("name")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.name?.message}
          </p>
        </div>
        <div>
          <label htmlFor="email"
           className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input id="email" type="email" placeholder="Enter your email"  {...register("email")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.email?.message}
          </p>
        </div>
        <div>
          <label htmlFor="password" 
          className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>
          <input  id="password" type="password" placeholder="Enter password"  {...register("password")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.password?.message}
          </p>
        </div>
        <div>
          <label htmlFor="age"
           className="block text-sm font-semibold text-gray-700 mb-2">
            Age
          </label>
          <input id="age" type="number" placeholder="Enter your age"  {...register("age")}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.age?.message}
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition duration-200 shadow-md"
        >
          Create Account
        </button>
      </form>
    </div>
  </div>
)
}
export default Register;