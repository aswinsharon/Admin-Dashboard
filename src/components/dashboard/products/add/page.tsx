import styles from "../../../ui/dashboard/products/addProduct/addProducts.module.css";

const AddProductsPage = () => {
  return (
    <div className={styles.container}>
      <form action="/" method="post" className={styles.form}>
        <input type="text" placeholder="title" name="title" required></input>
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="fashion">Fashion</option>
          <option value="computers">Computers</option>
          <option value="phone">Phone</option>
        </select>
        <input type="number" placeholder="price" name="price"></input>
        <input type="number" placeholder="stock" name="stock"></input>
        <input type="text" placeholder="color" name="color"></input>
        <input type="number" placeholder="size" name="size"></input>
        <input type="text" placeholder="description" name="desc"></input>
        <input type="url" placeholder="image url" name="img"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductsPage;
