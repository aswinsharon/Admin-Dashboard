import styles from "./users.module.css";
import Search from "../search/search";
const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}></div>
      <Search placeholder="Search for a user ..." />
      <link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
      </link>
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
                <link href="/">
                  <button className={`${styles.button}${styles.view}`}>
                    View
                  </button>
                  <button className={`${styles.button}${styles.delete}`}>
                    Delete
                  </button>
                </link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default UsersPage;
