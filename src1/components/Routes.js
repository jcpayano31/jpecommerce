import React, { Component } from 'react';
import Products from './section/Products';
import Product from './section/Product';
import Contact from './section/Contact';
import About from './section/About';
import Login from './section/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './section/Checkout';
import Home from './section/Home';
import Nav from './Nav'
import Payment from './section/Payment';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/payment" component={Payment} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/products" exact component={Products} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </Router>
      // <section>

      // </section>
    );
  }
}

export default Routes;
