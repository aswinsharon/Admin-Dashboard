import styles from "../ui/login/login.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"
import Alert from "../ui/dashboard/popup/alert";


const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [alertData, setAlertData] = useState<{
    type: string;
    message: string;
  } | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const showAlertWithData = (type: string, message: string) => {
    setAlertData({ type, message });
    setShowAlert(true);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.login(loginData);
      console.log(response);
      if (response?.statusCode === 200 && response?.status === "AUTHORIZED") {
        navigate(`/dashboard?username=${loginData.username}`)
      } else if (response?.statusCode === 403 && response?.status === "FORBIDDEN") {
        showAlertWithData("error", "User not found");
      } else if (response?.statusCode === 401 && response?.status === "UNAUTHORIZED") {
        showAlertWithData("error", "Invalid password");
      } else if (response?.statusCode === 500 && response?.status === "INTERNAL_SERVER_ERROR") {
        showAlertWithData("error", "Server error pls try again");
      } else {
        showAlertWithData("error", "Something went wrong... pls try again");
      }
    } catch (error: any) {
      console.log('under catch')
      showAlertWithData("error", "Something went wrong... pls try again");
    }
    return;
  }

  useEffect(() => {
    // Use the effect to hide the alert after a certain duration
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Adjust the delay time as needed

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [showAlert]);

  return (
    <div className={styles.container}>
      <form action="/" onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
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
        <button type="submit">Login</button>
        {showAlert && (
          <Alert
            show={true}
            type={alertData?.type || "error"}
            message={alertData?.message || ""}
            onClose={() => setShowAlert(false)}
          />
        )}
      </form>
    </div>
  );
};
export default LoginPage;
