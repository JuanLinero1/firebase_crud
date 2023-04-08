import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

import Create from './components/Create/Create'

function App() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "Users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      console.log(users)
    }
    getUsers()
  }, [])
  
  return (
    <div className="App">
      <Create />
    </div>
  )
}

export default App
