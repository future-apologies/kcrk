
const ProductsList = ({productsList, title}) => {
  
  return (
    <div className="product-list">
       {productsList.map((product) => (
           <div className="product-preview" key={product.sku}>
               <h2>{ product.name }</h2>
               <p>{ product.description }</p>
               {product.imgUrl && <img src={ product.imgUrl } alt="product"/>}
           </div>
       ))}

    </div>
  )
}

export default ProductsList;