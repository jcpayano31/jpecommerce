import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../StateProvider';
import kenneth from '../images/pexels-kenneth-carpina-1616097.jpg';
// 

import Subtotal from '../section/Subtotal';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    // remove the item from te basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={kenneth} alt="kenneth" />

        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item, index) => (
            <div className="checkout__item" key={item.id}>
              {/* <p>{item.id}</p> */}
              <img className="checkout__image" src={item.image} />

              <p className="checkoutProduct__title">{item.title}</p>

              <p className="checkoutproduct__price">
                <small>$</small>
                <strong>{item.price}</strong>
              </p>
              <div>
                <button onClick={() => removeFromBasket(item.id)}>
                  Remove From Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
