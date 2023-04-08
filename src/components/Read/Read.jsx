import React from 'react'

import Delete from '../Delete/Delete'
import Update  from '../Update/Update'

const Read = (props) => {
  const data = props.data
  return (
    data.map(item => {
      console.log(item)
      return( 
        <tr className='row'>
          <td>{item["First Name"]}</td>
          <td>{item["Last Name"]}</td>
          <td>{item["Age"]}</td>
          <td>{item["Email"]}</td>  
          <td><Delete /></td>
          <td><Update /></td>
        </tr>
      )
    })
  )
}

export default Read