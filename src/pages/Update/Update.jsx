import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = (props) => {
  const USER = props.user
  const setUSER = props.setUser
  const updateUser = props.updateFunc

  const [newUser, setNewUser] = useState({
    "First Name": USER["First Name"], 
    "Last Name": USER["Last Name"],  
    "Age": USER["Age"],  
    "Email": USER["Email"],  
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setNewUser((prev) => {
      return {...prev, [name]: value} 
    })
  }

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/")
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUser(USER.id, newUser);
      setUSER(updatedUser);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='profile'>
      <div className='title'>
        <h1>Update An Existing Profile</h1>
        <a href="/">
          <button className='btn btn__form-cancel'>Cancel</button>
        </a>
      </div>
      <form className='form' onSubmit={handleSubmit}>
          <input 
            name='First Name'
            type="text" 
            placeholder='first Name' 
            onChange={(e) => handleChange(e)} 
            defaultValue={newUser['First Name']} 
            required 
          />
          <input 
            name='Last Name'  
            type="text" 
            placeholder='Last Name'  
            onChange={(e) => handleChange(e)} 
            defaultValue={newUser['Last Name']} 
            required 
          />
          <input 
            name='Age'       
            type="number" 
            placeholder='Age'       
            onChange={(e) => handleChange(e)} 
            defaultValue={newUser['Age']} 
            required 
            min="0" 
            max="200"
          />
          <input 
            name='Email'     
            type="email" 
            placeholder='Email'      
            onChange={(e) => handleChange(e)} 
            defaultValue={newUser['Email']} 
            required 
          />
          <button 
            type='submit' 
            className='btn btn__form-update' 
            onClick={ () => {handleNavigate() }}
            >Update
          </button>
      </form>
    </div>
  )
}

export default Update