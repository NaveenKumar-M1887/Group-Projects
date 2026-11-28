import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
function Dashboard() {
    const location=useLocation();
    const [userdata,setUserdata]=useState(1);
   // function displaydata(){
     // setUserdata(location.state);
       // console.log(userdata)
    //}
    useEffect(()=>{
      setUserdata(location.state);
      console.log("Hello");
    },[])
    const checkendpoint= async()=>{
    const response = await API.get("/api/get")
    console.log(response.data)
   }
  return (
   <>
   <button onClick={userdata}>button</button>
   </>
  )
}
export default Dashboard