import api from "../../../../../services/api";
import Alert from "../../popup/alert";
import { useNavigate } from "react-router-dom";
import styles from "./addUsers.module.css";
import { useEffect, useState } from "react";

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
  const [alertData, setAlertData] = useState<{ type: string; message: string; } | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const showAlertWithData = (type: string, message: string) => {
    setShowAlert(true);
    setAlertData({ type, message });
  };
  useEffect(() => {
    // Use the effect to hide the alert after a certain duration
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [showAlert]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setShowAlert(true);
    try {
      console.log(formData);
      const response = await api.createUsers(formData);
      if (response?.statusCode === 201) {
        showAlertWithData("success", "User added successfully!");
        setTimeout(() => {
          setShowAlert(false);
          navigate("/dashboard/users");
        }, 2000);
      } else if (response?.statusCode === 409) {
        showAlertWithData("error", "Username or email is already taken");
      } else if (response?.statusCode === 400 && response.invalidFields?.length > 0) {
        showAlertWithData("error", "Please provide valid data");
      } else {
        showAlertWithData("error", "Something went wrong.. please try again")
      }
    } catch (error) {
      showAlertWithData("error", "Internal server error");
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
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
