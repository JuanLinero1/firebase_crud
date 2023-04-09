import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = (props) => {
  const USER = props.user
  const setUSER = props.setUser
  const updateUser = props.updateFunc
  console.log(USER.id)
  // updateUser("13j4JvWnBz9impv0zoRv", { "First Name": "John" })
  updateUser(USER.id, {["First Name"]: "juan", ["Last Name"]: "Linero", Age: "20", Email: "juan@gmail.com" })

  const [newUser, setNewUser] = useState({
    "First Name": "", 
    "Last Name": "", 
    "age": 0, 
    "Email": "",  
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setNewUser((prev) => {
      return {...prev, [name]: value} 
    })
  }

  const navigate = useNavigate()
  const handleNavigate = (item) => {
    navigate("/")
    props.setIdUser(item)
  }

  return (
    <div className='profile'>
      <div className='title'>
        <h1>Update An Existing Profile</h1>
        <a href="/"><button className='btn btn__form-cancel'>Cancel</button></a>
      </div>
      <form className='form'>
          <input name='First Name' type="text" placeholder='first Name' onChange={handleChange} defaultValue={USER['First Name']} required />
          <input name='Last Name'  type="text" placeholder='Last Name'  onChange={handleChange} defaultValue={USER['Last Name']} required />
          <input name='Age'       type="number" placeholder='Age'       onChange={handleChange} defaultValue={USER['Age']} required min="0" max="200"/>
          <input name='Email'     type="email" placeholder='Email'      onChange={handleChange} defaultValue={USER['Email']} required />
          <button type='submit' className='btn btn__form-update' onClick={() => {
            updateUser(newUser)
            handleNavigate()
          }}>Update</button>
      </form>
    </div>
  )
}

export default Update