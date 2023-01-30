import { Link } from "react-router-dom";

// pass in the products list from the fetch call as productsList
const ProductsList = ({productsList, title}) => {
  
  return (
    <div className="product-list">
      {/* map over every product in productsList */}
       {productsList.map((product) => (

            // set the key equal to the sku of each product
           <div className="product-preview" key={product.id}>

             {/* set the link to each single product view by passing the id/sku as an identifier */}
             <Link to={ `/productsList/${product.id}` }>

               {/* if the product has an image, display it using the url in the json data */}
                {product.imgUrl && <img src={ product.imgUrl } alt="product"/>}
                <div className="product-info">
                  
                  {/* display each product's name and description */}
                  <h2>{ product.name }</h2>
                  <p>{ product.description }</p>
                </div>
            </Link>
           </div>
       ))}
    </div>
  );
};

export default ProductsList;
