import React, { useEffect, useState } from 'react'

const Read = (props) => {
  const data = props.data

  console.log(props)
  return (
    data.map((item, index) => {
      return( 
        <tr key={item.id} className='user'>
              <th scope='row'>{index + 1}</th>
              <td>{item["First Name"] + " " + item["Last Name"]}</td>
              <td>{item["Age"]}</td>
              <td>{item["Email"]}</td>
              <td className='user__interface'>
                <a href="/Update"><button className='btn btn__update' onClick={() => { props.setIdUser(item.id) }}>Update</button></a>
              </td>
          </tr>
      )
    })
  )
}

export default Read