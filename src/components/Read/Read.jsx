import React from 'react'

import Delete from '../Delete/DeleteButton'
import Update  from '../Update/UpdateButton'

const Read = (props) => {
  const data = props.data
  return (
    data.map((item, index) => {
      return( 
          <tr key={item.id} className='user'>
              <th scope='row'>{index + 1}</th>
              <td>{item["First Name"] + " " + item["Last Name"]}</td>
              <td>{item["Age"]}</td>
              <td>{item["Email"]}</td>
              <td className='user__interface'>
                <Delete /> 
                <Update />
              </td>
          </tr>
      )
    })
  )
}

export default Read