import api from "../../../../../services/api";
import styles from "./addUsers.module.css";
import { useState } from "react";
const AddUsersPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "general",
  });

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await api.createUsers(formData);
      console.log("User added successfully:", response);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form action="/" onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="name" name="name" required></input>
        <input type="email" placeholder="email" name="email" required></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        ></input>
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
