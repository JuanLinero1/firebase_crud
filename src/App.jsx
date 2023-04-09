import Home from "./pages/Home/Home"
import Update from './pages/Update/Update';
import Create from "./pages/Create/Create";

import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Routes, Route } from 'react-router';

function App() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "Users")
  const [idUser, setIdUser] = useState("")
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [])
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home setIdUser={setIdUser} data={users}/> } />
        <Route path="/Update" element={ <Update id={idUser} /> } />
        <Route path="/Create" element={ <Create data={usersCollectionRef} /> } />
      </Routes> 
    </>
  )
}

export default App
