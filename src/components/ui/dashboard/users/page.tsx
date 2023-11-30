import React from "react";
import { Link } from "react-router-dom";
import styles from "./users.module.css";
import Search from "../search/search";
import Pagination from "../pagination/pagination";
import userList from "./hooks/userList";
import { UserType } from "Types";
const UsersPage: React.FC = () => {
  const { users } = userList.useUserList();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user ..." />
        <Link to="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: UserType) => {
            <tr>
              <td>
                <div className={styles.user}>
                  <img
                    src=""
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  ></img>
                  John Doe
                </div>
              </td>
              <td>john@gmail.com</td>
              <td>13.01.2022</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                  <Link to="/">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default UsersPage;
