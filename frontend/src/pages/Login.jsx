import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
function Login() {
 // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
 // const [formdata,setFormdata]=useState({
 //   username:"",
  //  password:""
  // })
  const [logindata,setLogindata]=useState({
    username:"",
    password:""
  })
  const navigate=useNavigate();
const location=useLocation();
/*  function handleChange(e){
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }
    */
    function handleChange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
    })
  }
  function handlesubmit(event) {
    event.preventDefault()
    const registerdata = location.state;
    console.log("Login Page:", logindata);
    console.log("Registration Page:", registerdata);
    if (
  registerdata &&
  logindata.username === registerdata.email &&
  logindata.password === registerdata.password
) {
  navigate("/dashboard", {
    state: logindata
  });
} else {
  alert("Invalid Email or Password");
}
   // console.log("Email:", email)
   // console.log("Password:", password)
   // alert("Login button clicked successfully!")
    //navigate("/dashboard",{
    //  state:formdata
    //})
  }
return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back
        </h1>
        <p className="text-gray-500 mt-2">
          Login to your account
        </p>
      </div>
      <form onSubmit={handlesubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input type="email" id="username" name="username" placeholder="Enter your email" value={logindata.username} onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input type="password"id="password" name="password"placeholder="Enter password"value={logindata.password}onChange={handleChange} required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition duration-200 shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login