
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Products.css';
import { useStateValue } from '../../StateProvider';


//refactory in order to use Contex
export class Products extends Component {

  state = {
    isLoading: true,
    products: [],
    error: '',
  };

  componentDidMount() {
    fetch(`https://fakestoreapi.com/products?limite=21`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { isLoading, error, products } = this.state;

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

              {/* <button onClick={}>Add to basket</button> */}
//             </div>
//           </div>
        ))}
      </div>
    );
  }
}
export default Products
