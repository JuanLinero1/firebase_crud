import Read from '../../components/Read/Read'

function Home(props) {
  const users = props.data
  return (
    <>
      <a href="/Create"><button className='btn btn__create'>Create</button></a>
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
          <Read setIdUser={props.setIdUser} data={users} deleteUser={props.deleteUser} />
        </tbody>
      </table>
    </>
  )
}

export default Home