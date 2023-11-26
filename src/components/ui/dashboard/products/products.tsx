import { Link } from "react-router-dom";
import styles from "./products.module.css";
import Search from "../search/search";
import Pagination from "../pagination/pagination";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product ..." />
        <Link to="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Image</td>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <img
                  src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674493/Croma%20Assets/Communication/Mobiles/Images/300748_0_gqjriw.png?tr=w-600"
                  alt=""
                  width={70}
                  height={70}
                  className={styles.userImage}
                ></img>
              </div>
            </td>
            <td>Iphone 15</td>
            <td>NA</td>
            <td>1100$</td>
            <td>24/11/2023</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link to="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
