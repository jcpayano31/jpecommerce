import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Product.css';
import { useStateValue } from '../../StateProvider';

function Product(props) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // console.log('data on userEffect', props);
    // console.log(props.match.params.id);
    const productid = props.match.params.id;
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  const onAddToBasket = () => {
    // add item to basket...
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
      },
    });
  };

  const removeFromBasket = () => {
    // remove the item from te basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: product.id,
    });
  };

  return (
    <div className="details">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="card" key={product.id}>
        <img src={product.image} alt="" />
        <div className="content">
          {/* <h3>ID:{product.id}</h3> */}
          <h3>{product.title}</h3>
          <span>${product.price}</span>
          <p>{product.description}</p>
          <button onClick={onAddToBasket}>Add to Basket</button>
          {/* <form onSubmit={this.onAddToBasket} product={product}>
            <button type="onSubmit">Add to Basket</button>
          </form> */}
          <button onClick={removeFromBasket}>Delete From Basket</button>
          <Link to="/checkout" className="cart">
            View Basket
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Product;
