import { Link } from "react-router-dom";
import styles from "./menuLink.module.css";
import { useLocation } from "react-router-dom";
import { MenuLinkItemType } from "../../../../../types/Types";

const MenuLink: React.FC<MenuLinkItemType> = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Link
      to={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
