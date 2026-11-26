import { useState } from 'react'
function Team() {
    const [team,setTeam]=useState('')
  return (
    <div>
      <h1>Welcome to Team Page </h1>
      <p>Type your Team name</p>
      <input type="text" required placeholder="Enter Your team name" value={team} onChange={(e) => setTeam(e.target.value)}/>
      <button type="Submit">Submit</button>
    </div>
  )
}
export default Team