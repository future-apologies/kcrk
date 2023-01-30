import { Link } from "react-router-dom";

const ProductsList = ({ productsList, title }) => {
  return (
    <div className="product-list">
      {productsList.map((product) => (
        <div className="product-preview" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {product.imgUrl && <img src={product.imgUrl} alt="product" />}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
