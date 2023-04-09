import React, { useReducer, useState } from 'react'
import { addDoc, doc, updateDoc } from 'firebase/firestore'

const Update = (props) => {
  console.log(props)  
  // doc(db, "Users", data.)
  useState(() => props.id, [props.id])
  const handleChange = () => {}
  return (
    <div className='profile'>
      <div className='title'>
        <h1>Update An Existing Profile</h1>
        <a href="/"><button className='btn btn__form-cancel'>Cancel</button></a>
      </div>
      <form className='form'>
          <input name='First Name' type="text" placeholder='first Name' required />
          <input name='Last Name'  type="text" placeholder='Last Name'  required />
          <input name='Age'       type="number" placeholder='Age'       required min="0" max="200"/>
          <input name='Email'     type="email" placeholder='Email'      required />
          <button type='submit' className='btn btn__form-update'>Update</button>
      </form>
    </div>
  )
}

export default Update