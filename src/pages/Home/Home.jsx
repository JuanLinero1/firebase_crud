import Read from '../../components/Read/Read'
import Create from '../../components/Create/CreateButton'

function Home(props) {
  const users = props.data
  return (
    <>
      <Create />
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
          <Read data={users} />
        </tbody>
      </table>
    </>
  )
}

export default Home