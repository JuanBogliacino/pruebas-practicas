import { useState } from "react";

const usersList = [
    {
      id: 1,
      name: "Ana García",
      email: "ana@example.com",
      age: 28,
      country: "España",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      age: 35,
      country: "Estados Unidos",
    },
    {
      id: 3,
      name: "Maria Santos",
      email: "maria@example.com",
      age: 22,
      country: "Brasil",
    },
    {
      id: 4,
      name: "Li Wei",
      email: "li@example.com",
      age: 30,
      country: "China",
    },
    {
      id: 5,
      name: "Sven Andersen",
      email: "sven@example.com",
      age: 29,
      country: "Noruega",
    },
  ];

const UserTable = () => {
    const [users, setUsers] = useState(usersList)
    const [inputValue, setInputValue] = useState('')

    const handleDelete = (id) => {
        const usersFiltered = users.filter(user => user.id !== id)
        console.log(usersFiltered);
        setUsers(usersFiltered)
    }

    const changeValue = (e) => {
        if (e.target.value == ' ') return
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        filterByName(inputValue)
    }

    const filterByName = (value) => {
        const searchUsers = usersList.filter(user => user.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()))
        console.log(searchUsers);
        setUsers(searchUsers)
    }

  return (
    <>
    <h1>UserTable</h1>

    <form onSubmit={handleSubmit}>
        <input onChange={changeValue} value={inputValue} placeholder="buscar nombre..." />
    </form>

    <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Correo Electrónico</th>
        <th>Edad</th>
        <th>País</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td>{user.country}</td>
          <td><button onClick={()=> handleDelete(user.id)}>delete</button></td>
        </tr>
        ))
      }
    </tbody>
    </table>
    </>
  )
}

export default UserTable