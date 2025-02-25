import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

export default function RegesterUser() {

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const nevigate = useNavigate()

  const handleData = async () => {
    const newdata = { name, contact, email, password }
    const response = await axios.post("http://localhost:5000/register", newdata)
      .then((msg) => {
        console.log(msg.data.msg);
      })

    if (name && contact && email && password) {

      toast.success("user Regestred")
      setTimeout(() => {
        nevigate("/login")
      }, 4000)

    }

    if (response.data.msg === "User already exist please login") {
      toast.error("User already registered");
    } else if (response.data.msg === "User Registered") {
      toast.success("User register successfully");
      setTimeout(() => {
        nevigate("/login")
      }, 3000)
    }
  }


  return (
    <div>
      <ToastContainer />
      <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Enter Contact Number' value={contact} onChange={(e) => setContact(e.target.value)} />
      <input type="text" placeholder='Enter Email ID' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleData}>Add Admin</button>

      <Link to={"/login"}>Login</Link>

    </div>
  )
}
