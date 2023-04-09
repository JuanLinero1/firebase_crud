import React, { useState } from 'react'
import { addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {
  const data = props.data

  const [newUser, setNewUser] = useState({
    "First Name": "", 
    "Last Name": "", 
    "age": 0, 
    "Email": "",  
  })

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/")
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setNewUser((prev) => {
      return {...prev, [name]: value} 
    })
  }

  const createUsers = async () => {
    await addDoc(data, newUser)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.getUsers()
    createUsers()
    setTimeout(() => handleNavigate(), 0)
  }


  return (
    <div className='profile'>
      <div className='title'>
        <h1>Create A New Profile</h1>
        <a href="/"><button className='btn btn__form-cancel' onSubmit={e => e.preventDefault(e)}>Cancel</button></a>
      </div>
      <form className='form' onSubmit={e => handleSubmit(e)}>
          <input name='First Name' type="text" placeholder='first Name' required onChange={handleChange} />
          <input name='Last Name'  type="text" placeholder='Last Name'  required onChange={handleChange} />
          <input name='Age'       type="number" placeholder='Age'      required onChange={handleChange} min="0" max="200"/>
          <input name='Email'     type="email" placeholder='Email'     required onChange={handleChange} />
          <button type='submit' className='btn btn__form-submit'>Submit</button>
      </form>
    </div>
  )
}

export default Create