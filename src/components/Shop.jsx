import useFetch from "../useFetch";
import ProductsList from "./ProductsList";

const Shop = () => {
  const {
    data: productsList,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="shop">
      {error && <div>{error}</div>}
      {isLoading && <div>loading...</div>}
      {productsList && <ProductsList productsList={productsList} title="" />}
    </div>
  );
};

export default Shop;
