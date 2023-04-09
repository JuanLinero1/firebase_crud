import Home from "./pages/Home/Home"
import {Update} from './pages/Update/Update';
import Create from "./pages/Create/Create";

import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { Routes, Route } from 'react-router';

function App() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "Users")
  const [idUser, setIdUser] = useState("")
  const [changeCount, setChangeCount] = useState(0);

  const handleChanges = () => {
    setChangeCount(changeCount + 1);
  }
  
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef)
    setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
  }
  useEffect(() => {
    getUsers()
  }, [])

  
  const updateUser = async (id, updates)  => {
    const docRef = doc(db, 'Users', id)
    await updateDoc(docRef, updates)
  }
  const deleteUser = async (e, id) => {
    e.preventDefault()
    const docRef = doc(db, 'Users', id)
    await deleteDoc(docRef)
    getUsers()
  }

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home setIdUser={setIdUser} data={users} changeCount={changeCount} deleteUser={deleteUser} /> } />
        <Route path="/Update" element={ <Update setUser={setIdUser} user={idUser} updateFunc={updateUser} handleChanges={handleChanges} changeCount={changeCount} getUsers={getUsers} /> } />
        <Route path="/Create" element={ <Create data={usersCollectionRef} handleChanges={handleChanges} changeCount={changeCount} getUsers={getUsers} /> } />
      </Routes> 
    </>
  )
}

export default App
