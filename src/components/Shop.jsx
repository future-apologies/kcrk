import useFetch from "../useFetch";
import ProductsList from "./ProductsList";

const Shop = () => {

  // fetch the list of products from the server and save them as productsList
  const { data:productsList, isLoading, error } = useFetch('http://localhost:8000/products');

    return (
        <div className="shop">
          {/* display any errors that occurr during the fetch or a loading message while the data is fetched */}
            {error && <div>{ error }</div>}
            {isLoading && <div>loading...</div>}
            {/* if there is data for the productsList, pass it to the ProductsList component */}
            {productsList && <ProductsList productsList={productsList} title='' /> }
        </div>
      );
}

export default Shop;
