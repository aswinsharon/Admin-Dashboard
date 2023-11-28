import styles from "./addUsers.module.css";

const AddUsersPage = () => {
  return (
    <div className={styles.container}>
      <form action="/" className={styles.form}>
        <input type="text" placeholder="name" name="name" required></input>
        <input type="email" placeholder="email" name="email" required></input>
        <select name="role" id="role">
          <option value="general">Choose a role</option>
          <option value="admin">admin</option>
          <option value="member">member</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUsersPage;
