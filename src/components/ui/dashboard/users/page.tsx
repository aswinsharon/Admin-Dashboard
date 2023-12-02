import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./users.module.css";
import Search from "../search/search";
import Pagination from "../pagination/pagination";
import api from "../../../../services/api";
import { UserType, UsersArrayType } from "Types";

const UsersPage: React.FC = () => {
  const [userData, setUserData] = useState<UsersArrayType>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await api.fetchUsers();
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId: string) => {
    console.log("under handle of delete");
    try {
      const deleteResponse = await api.deleteUser(userId);
      if (null !== deleteResponse) {
        if (204 === deleteResponse?.status) {
          const updatedUserData = userData?.filter(
            (user) => user._id !== userId
          );
          setUserData(updatedUserData);
        } else {
        }
      } else {
      }
    } catch (error) {
      throw error;
    }
  };

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
          {userData?.map((user: UserType) => {
            if (user?._id && user?.address && user?.email && user?.username) {
              return (
                <tr key={user._id}>
                  <td>
                    <div className={styles.user}>
                      <img
                        src={user.img}
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}
                      ></img>
                      {user.username}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>13.01.2022</td>
                  <td>{user.isAdmin ? "Admin" : "Member"}</td>
                  <td>{user.isActive ? "Active" : "InActive"}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link to="/">
                        <button className={`${styles.button} ${styles.view}`}>
                          View
                        </button>
                      </Link>
                      <button
                        className={`${styles.button} ${styles.delete}`}
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            } else {
              throw new Error("Error fetching details");
            }
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default UsersPage;
