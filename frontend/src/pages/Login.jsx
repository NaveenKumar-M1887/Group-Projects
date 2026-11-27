import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [formdata,setFormdata]=useState({username:'',password:''})
  const navigate=useNavigate();
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
    function handleChange(e){setFormdata({
      ...formdata,[e.target.name]:e.target.value})}
    //console.log('Email:', email)
    //console.log('Password:', password)
    const handleSubmit = (e) => {
    e.preventDefault()
    alert("Login SuccessFully...")
    navigate("/Dashboard",{state:formdata})
    console.log('Email :',formdata.username)
   console.log('password :',formdata.password)}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" required placeholder="Enter username" value={formdata.username} onChange={handleChange}/>
        <input type="password" name="password" required placeholder="Enter Password" value={formdata.password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login
