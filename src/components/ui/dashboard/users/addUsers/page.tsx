import api from "../../../../../services/api";
import Alert from "../../popup/alert";

import styles from "./addUsers.module.css";
import { useState } from "react";
const AddUsersPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    isActive: "no",
    isAdmin: "no",
    address: "",
    phone: "",
  });
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    type: "success", // Default to success, can be 'success' or 'error'
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // for (let count = 0; count < 4; count++) {
  //   setAlertInfo({
  //     show: true,
  //     type: "success",
  //     message: "User successfully created!",
  //   });
  // }
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await api.createUsers(formData);
      console.log(response);
      setAlertInfo({
        show: true,
        type: "success",
        message: "User successfully created!",
      });

      setFormData({
        username: "",
        email: "",
        password: "",
        img: "",
        isActive: "no",
        isAdmin: "no",
        address: "",
        phone: "",
      });
    } catch (error) {
      setAlertInfo({
        show: true,
        type: "error",
        message: "Error creating user. Try again.",
      });
      console.error("Error sending data to backend:", error);
    }
  };

  const closeAlert = () => {
    setAlertInfo({
      show: false,
      type: "success", // Reset to default type
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <form action="/" onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="name"
          name="username"
          onChange={handleChange}
          required
        ></input>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          placeholder="phone no"
          name="phone"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handleChange}
          required
        ></input>
        <input
          type="text"
          placeholder="image url for profile"
          name="img"
          onChange={handleChange}
        ></input>
        <select name="isAdmin" onChange={handleChange}>
          <option>is Admin user?</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <select name="isActive" onChange={handleChange}>
          <option>is Active user?</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <Alert
        show={alertInfo.show}
        type={alertInfo.type}
        message={alertInfo.message}
        onClose={closeAlert}
      />
    </div>
  );
};

export default AddUsersPage;
