import React, { Component } from 'react';
import cottonbro from '../images/pexels-cottonbro-4829075.jpg';
import '../css/Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="central">
        <div className="central-img">
          <img src={cottonbro} alt="cottobro" />
        </div>
      </div>
    );
  }
}

export default Home;
