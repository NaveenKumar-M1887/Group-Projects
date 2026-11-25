import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './App.css'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" required placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" required placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login
