import { useState } from "react";

const UserTable = ({ usersList }) => {
  const [users, setUsers] = useState(usersList);
  const [sortColumn, setSortColumn] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortColumn(null);
    } else {
      setSortColumn(column);
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortColumn === "country") {
      return a.country.localeCompare(b.country);
    } else if (sortColumn === "age") {
      return a.age - b.age;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const onDeleteUser = (id) => {
    // Filtrar la lista de usuarios para eliminar al usuario con el nombre dado
    const updatedUsers = users.filter((user) => user.id !== id);
    // Actualizar el estado de los usuarios
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>Tabla de Usuarios</h2>

        <h4>Total de usuarios: {filteredUsers.length}</h4>

        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")} className="pointer">
              Nombre
            </th>
            <th onClick={() => handleSort("age")} className="pointer">
              Edad
            </th>
            <th onClick={() => handleSort("country")} className="pointer">
              País
            </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.country}</td>
              <td>
                <button onClick={() => onDeleteUser(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
