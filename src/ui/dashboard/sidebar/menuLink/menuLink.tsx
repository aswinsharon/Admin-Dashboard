import { Link } from "react-router-dom";
import styles from "./menuLink.module.css";
import { MenuLinkItemType } from "../../../../../types/Types";

const MenuLink: React.FC<MenuLinkItemType> = ({ item }) => {
  return (
    <Link to=".." relative={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
