import React, { useReducer, useState } from 'react'
import { addDoc, updateDoc } from 'firebase/firestore'

const Update = (props) => {
  const data = props.data
  console.log(data["First Name"])

  const [user, setUser] = useState({
    "First Name": data["First Name"],
    "Last Name": data["Last Name"], 
    "Age": data["Age"],
    "Email": data["Email"],
  })

  return (
    <div className='create-profile'>
      <div className='create__title'>
        <h1>Update An Existing Profile</h1>
        <a href="/"><button className='btn btn__form-cancel'>Cancel</button></a>
      </div>
      <form className='form'>
          <input name='First Name' type="text" placeholder='first Name'onChange={handleChange} required />
          <input name='Last Name'  type="text" placeholder='Last Name' onChange={handleChange} required />
          <input name='Age'       type="number" placeholder='Age'      onChange={handleChange} required min="0" max="200"/>
          <input name='Email'     type="email" placeholder='Email'     onChange={handleChange} required />
          <button type='submit' className='btn btn__form-submit'>Update</button>
      </form>
    </div>
  )
}

export default Update