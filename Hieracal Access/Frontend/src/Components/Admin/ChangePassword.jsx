import React, { useEffect, useState } from 'react'

export default function ChangePassword() {

    const [email, setEmail] = useState("")
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [conPass, setConPass] = useState("")

    const [data,setData] = useState([])

    useEffect(()=>{
        fetchApi()
    },[]);

    const fetchApi = async () => {
        const newData = {email,oldPass,newPass,conPass}
        const response = await fetch('http://localhost:1008/chnagePass',newData)
        setData(response);
    }

    return (
        <div>
            <input type="text" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Old Password' onChange={(e) => setOldPass(e.target.value)} />
            <input type="text" placeholder='New Password' onChange={(e) => setNewPass(e.target.value)} />
            <input type="text" placeholder='Confirm Password' onChange={(e) => setConPass(e.target.value)} />

            <button>Update Password</button>
        </div>
    )
}
