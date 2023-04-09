import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Read = (props) => {
  const data = props.data

  const handleState = () => {
    props.setIdUser()
  }
  const navigate = useNavigate()
  const handleNavigate = (item) => {
    navigate("/Update")
    props.setIdUser(item)
  }

  useEffect(() => { 
    props.getUsers
  }, [props.changeCount]);  

  return (
    data.map((item, index) => {
      return( 
        <tr key={item.id} className='user'>
              <th scope='row'>{index + 1}</th>
              <td>{item["First Name"] + " " + item["Last Name"]}</td>
              <td>{item["Age"]}</td>
              <td>{item["Email"]}</td>
              <td className='user__interface'>
                <button className='btn btn__update' onClick={() => handleNavigate(item)}>Update</button>
              </td>
          </tr>
      )
    })
  )
}

export default Read