import { RelativeRoutingType } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./sidebar.module.css";
import { MenuItemType } from "../../../../types/Types";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import noavatar from "../../../../assets/noavatar.png";

let menuItems: MenuItemType[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard" as RelativeRoutingType,
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users" as RelativeRoutingType,
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products" as RelativeRoutingType,
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions" as RelativeRoutingType,
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue" as RelativeRoutingType,
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports" as RelativeRoutingType,
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams" as RelativeRoutingType,
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings" as RelativeRoutingType,
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help" as RelativeRoutingType,
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          className={styles.userImage}
          src={noavatar}
          alt=""
          width="50"
          height="50"
        ></img>
        <div className={styles.userDetail}>
          <span className={styles.userName}>John doe</span>
          <span className={styles.userTitle}>Admininstrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((elem: MenuItemType) => (
          <li key={elem.title}>
            <span className={styles.category}>{elem.title}</span>
            {elem.list.map(
              (item: {
                title: string;
                path: RelativeRoutingType;
                icon: ReactNode;
              }) => (
                <MenuLink item={item} key={item.title} />
              )
            )}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};
export default SideBar;
