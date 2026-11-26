import { useNavigate } from "react-router-dom";
import { Registerschema } from "../Components/Registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function Register() {
    const navigate =useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(Registerschema)
    })
    function onSubmit(data){
        console.log(data)
        alert("register Success")
        navigate("/")
    }
    return ( <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="Enter your name" required placeholder="Enter username" {...register("name")}/>
        <p>{errors.name?.message}</p>
       <input type="email" name="Enter your Email" required placeholder="Enter your email" {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="password" name="Enter your Password" required placeholder="Enter your password" {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="number" name="Enter your age" required placeholder="Enter your age" {...register("age")}/>
        <p>{errors.age?.message}</p>
        <button type="submit">Submit</button>
        </form>
     );
}

export default Register;