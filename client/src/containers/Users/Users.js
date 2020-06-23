import React, { useEffect, useMemo, useCallback } from "react";
import DataTable from "../../components/DataTable";
import { FaTrash } from "react-icons/fa";
import AddUserModal from "./AddUserModal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as userActions from "./userAction";

const Users = (props) => {
  const { getUsers, users } = props;
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onDelete = useCallback((userToRemove) => {
    fetch(`http://localhost:3001/users/${userToRemove.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Failed to remove", userToRemove);
        } else {
          /*setUsers((users) =>
            users.filter((user) => user.id !== userToRemove.id)
          );*/
        }
      })
      .catch((error) => console.error(error));
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
      {
        Header: "Toiminnot",
        accessor: (originalRow, rowIndex) => {
          return <FaTrash onClick={() => onDelete(originalRow)} />;
        },
      },
    ],
    [onDelete]
  );

  return (
    <div>
      <h3>Users</h3>
      <AddUserModal />
      <DataTable columns={columns} data={users} />
    </div>
  );
};

Users.displayName = "Users";
export default connect(
  (store) => {
    return {
      users: store.userStore.users,
    };
  },
  (dispatch) => bindActionCreators(userActions, dispatch)
)(Users);
