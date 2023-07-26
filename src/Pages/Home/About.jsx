import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from "./About.css";

const About = () => {
  return (
    <section className="sectionabout" background-color="#10083B" style={{marginTop: "100px", marginBottom: "100px"}} id="UniqueApe">
      <div className="container">
      <h3 className="feature-content2">ABOUT US</h3>
      <div className="wrappercard2">
       <Row>
        <Col>
        <h3 className="feature-content3">Lottery Platform</h3>
        <p className="subrarity-content">
        PandaMint is a lottery and NFT minting platform built especially for the community.
Every NFT or $Panda token holder has a chance to win daily jackpot rewards at PandaMint.
The PandaMint platform is built on top of the Caduceus network. Which chain has very good advantages.
Very low transaction fees made us choose Caduceus as a network to create a PandaMint platform.
        </p>
        </Col>
        </Row>
        </div>
      </div>
    </section>
  );
}

export default About;
