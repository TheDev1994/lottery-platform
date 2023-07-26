import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import classes from "./Join.css";

const Join = () => {
  return (
    <section className="join" background-color="#10083B" style={{marginTop: "200px"}}>
      <div className="hero2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="herotitle">
              JOIN OUR COMMUNITY
            </h1>
            <div className="wrapper">
            <Button className="SocialMedia2" style={{background: "#71B3FF"}}>
              TELEGRAM
            </Button>
            <Button className="SocialMedia2" style={{background: "#71B3FF"}}>
              TWITTER
            </Button>
            </div>

          </div>
          <div class="col-md-6">
            <div className="text-center">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="wrapper">
      <Button className="SocialMedia">
        Minting
      </Button>
      <Button className="SocialMedia">
        NFT Lottery
      </Button>
      <Button className="SocialMedia">
        Staking
      </Button>
      </div>
    </div>
    <section className="footer" style={{marginTop: "50px"}}>
      <Container>
        <div className="footer-main">
          <div>
            <div className="com-name">POWERED BY PANDADEV</div>
          </div>
        </div>
      </Container>
    </section>
    </section>
  );
}

export default Join;
