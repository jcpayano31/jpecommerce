import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Products.css';
import { useStateValue } from '../../StateProvider';
import Product from './Product';

function Products() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    

    fetch(`https://fakestoreapi.com/products?limite=21`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);        
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  const onAddToBasket = (id ,title,image,price ) => {
    // add item to basket...
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title:title,
        image: image,
        price:price,
      },
    });
  };

  const removeFromBasket = (id) => {
    // remove the item from te basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div id="product">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {products.map((product, index) => (
        <div className="card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt="" />
          </Link>
          <div className="content" key={product.id}>
            <h3>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h3>
            <span>${product.price}</span>

           
            <button onClick={() => onAddToBasket(product.id,product.title,
              product.image,product.price )}>Add to Basket</button>
            {/* <button onClick={onAddToBasket}>Add to Basket</button> */}
            
           
            {/* <button onClick={removeFromBasket}>Delete From Basket</button> */}
            <button onClick={() => removeFromBasket(product.id)}>
                  Remove From Basket
                </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Products;
