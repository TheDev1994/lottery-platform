import React from 'react';
import { Container, Row, Col } from "reactstrap";
import classes from "./Footer.css";

const Footer = () => {

  return (
    <section style={{marginTop: "50px"}}>
      <Container>
        <div className="footer-main">
          <div>
            <div className="com-name">POWERED BY Ding</div>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="https://opensea.io/collection/the-doge-pound" target="_blank" rel="noreferrer">
                <img src="/images/Subtract.png" alt="Opensea" style={{width: "35px"}} />
              </a>
            </li>
            <li className="list-group-item">
              <a href="https://medium.datadriveninvestor.com/how-to-buy-and-sell-the-doge-pound-nft-7c7bff7601f5" target="_blank" rel="noreferrer">
                <img src="/images/twitter-512.png" alt="Medium" style={{width: "35px"}} />
              </a>
            </li>
            <li className="list-group-item">
              <a href="https://www.instagram.com/challenge/AXERaZztICtpfm8eGnJujiYwUtch4Zp-nf6tbvDoOTol0GM6sot1h6tLZip1uFCVRlRDOxU/BKRQuTtkUC/" target="_blank" rel="noreferrer">
                <img src="/images/vector.png" alt="Instagram" style={{width: "35px"}} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
