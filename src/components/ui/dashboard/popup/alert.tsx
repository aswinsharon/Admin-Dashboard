// Alert.js
import { useState, useEffect } from "react";
import styles from "./alert.module.css";

const Alert = ({ show, type, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);

      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [show, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div
      className={`${styles.alert} ${isVisible ? styles.showAlert : ""} ${
        type === "success" ? styles.success : styles.error
      }`}
    >
      <span className={`${styles.icon} fas fa-exclamation-circle`}></span>
      <span className={styles.msg}>{message}</span>
      <div className={styles.closeBtn} onClick={handleClose}>
        <span className={`${styles.icon} fas fa-times`}></span>
      </div>
    </div>
  );
};

export default Alert;
