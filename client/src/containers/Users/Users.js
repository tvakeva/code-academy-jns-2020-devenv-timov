import React, { useEffect, useState, useMemo } from "react";
import DataTable from "../../components/DataTable";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Nimi",
        accessor: "name",
      },
      {
        Header: "Sähköposti",
        accessor: "email",
      },
    ],
    []
  );

  return (
    <div>
      <h3>Users</h3>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

Users.displayName = "Users";
export default Users;
