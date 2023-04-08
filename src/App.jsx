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
    <>
      <Create />
      <table className='table'>
        <thead>
          <tr className='table__head'>
            <th scope='column'>#</th>
            <th scope='column'>Full Name</th>
            <th scope='column'>Age</th>
            <th scope='column'>Email</th>
            <th scope='column'>Button</th>
          </tr>
        </thead>
        <tbody>
          <Read data={users} />
        </tbody>
      </table>
    </>
  )
}

export default App
