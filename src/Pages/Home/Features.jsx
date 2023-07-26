import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from "./Features.css";

const Line = () => {
  return (
    <section>
      <div className="container">
      <h3 className="feature-content2">1.000 Official NFTs</h3>
        <div className="wrapper">
          <img className="wrappericon" src="https://i.ibb.co/0hvgQZg/17.png" />
             <img className="wrappericon" src="https://i.ibb.co/dt4xQ8C/18.png" />
             <img className="wrappericon" src="https://i.ibb.co/c3GjxmH/21.png" />
           <img className="wrappericon" src="https://i.ibb.co/9VbDLY0/44.png" />
           <img className="wrappericon" src="https://i.ibb.co/QkBNCZF/76.png" />
              <img className="wrappericon" src="https://i.ibb.co/PZ6Q566/98.png" />
        </div>
      </div>
    </section>
  );
}

export default Line;
