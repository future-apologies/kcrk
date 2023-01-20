import {useState, useEffect} from 'react';

const SingleProduct = (id) => {
    const [currProduct, setCurrProduct] = useState(null);
    const [currStock, setCurrStock] = useState(0);

    // useEffect(() =>{
    //     setCurrProduct(id)
    //     setCurrStock(id)
    // })

    return (
    <div className="container">
        <div className="containerLeft">
            <img src={currProduct.imageUrl} alt={`KCRK item: ${currProduct.name}`} />
        </div>
        <div className="containerRight">
            {currStock < 1 ? (
                <h2>currently out of stock</h2>
            ) : (
                <h2>{currProduct.name}</h2>
                <span>{currProduct.price}</span>
                <p>{currProduct.description}</p>
                <
                <button type="submit">
                    add to cart
                </button>
            )}
        </div>
    </div>
    )
};