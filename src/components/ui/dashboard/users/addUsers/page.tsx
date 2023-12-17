import api from "../../../../../services/api";
import Alert from "../../popup/alert";
import { useNavigate } from "react-router-dom";
import styles from "./addUsers.module.css";
import { useState } from "react";
const AddUsersPage = () => {
  const navigate = useNavigate();
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
  const [alertData, setAlertData] = useState<{
    type: string;
    message: string;
  } | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setShowAlert(true);
    try {
      console.log(formData);
      const response = await api.createUsers(formData);
      console.log(response);
      setAlertData({
        type: "success",
        message: "User added successfully!",
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
      setTimeout(() => {
        navigate("/dashboard/users");
      }, 3000);
    } catch (error) {
      setAlertData({
        type: "error",
        message: "Something went wrong.. please try again",
      });
      console.error("Error sending data to backend:", error);
    }
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
      {showAlert && (
        <Alert
          show={true}
          type={alertData?.type || "error"}
          message={alertData?.message || ""}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default AddUsersPage;
