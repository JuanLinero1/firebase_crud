import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

import Read from './components/Read/Read'
import Create from './components/Create/Create'

function App() {
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "Users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [])
  
  return (
    <div className="App">
      <table>
        <Read data={users} />
      </table>
    </div>
  )
}

export default App
