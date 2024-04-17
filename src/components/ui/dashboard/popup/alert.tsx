// Alert.js
import { useState, useEffect } from "react";
import "./alert.css";

const Alert = ({ show, type, message, onClose }) => {
  const [alertVisible, setAlertVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (alertVisible) {
      timeoutId = setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [alertVisible, onClose]);

  const showAlert = () => {
    setAlertVisible(true);
  };
  const hideAlert = () => {
    setAlertVisible(false);
  };
  useEffect(() => {
    setAlertVisible(show);
  }, [show]);

  return (
    <div>
      <div
        className={`alert ${type} ${alertVisible ? "show showAlert" : "hide"}`}
      >
        <span className="fas fa-exclamation-circle"></span>
        <span className="msg">{message}</span>
        <div className="close-btn" onClick={hideAlert}>
          <span className="fas fa-times"></span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
