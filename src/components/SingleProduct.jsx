import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isPending,
  } = useFetch("http://localhost:8000/products/" + id);

  return (
    <div className="container">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {product && (
        <>
          <div className="containerLeft">
            <img src={product.imgUrl} alt={`KCRK product: ${product.name}`} />
          </div>
          <div className="containerRight">
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <button type="submit">add to cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
