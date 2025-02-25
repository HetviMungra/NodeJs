import React, { useEffect } from 'react';
import RegesterUser from './Components/Admin/RegesterUser';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Admin/Login';
import ChangePassword from './Components/Admin/ChangePassword';

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("Token"); 
    navigate("/login"); 
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />  
      <Routes>
        <Route path='/' element={<RegesterUser />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/changePass' element={<ChangePassword/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
