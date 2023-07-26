import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from "./Team.css";

const Team = () => {
  return (
    <section className="section" background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
      <div className="container">
      <h3 className="feature-content2">OUR TEAM</h3>
        <div className="wrapper">
        <div className="wrapper-card">
        <img className="wrappericon1" src="https://i.ibb.co/0hvgQZg/17.png" />
        <p className="Team-content">  Ronald </p>
        <p className="Team-content3"> Founder </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="https://i.ibb.co/dt4xQ8C/18.png" />
        <p className="Team-content">  Ding </p>
        <p className="Team-content3"> Marketing </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="https://i.ibb.co/9VbDLY0/44.png" />
        <p className="Team-content">  Coky </p>
        <p className="Team-content3"> Artist </p>
        </div>
        <div className="wrapper-card">
        <img className="wrappericon1" src="https://i.ibb.co/QkBNCZF/76.png" />
        <p className="Team-content">  Richard </p>
        <p className="Team-content3"> CMO </p>
        </div>
      </div>
      </div>
      <section className="section" background-color="#10083B" style={{marginTop: "30px", marginBottom: "30px"}}>
        <div className="container">
        <h3 className="feature-content2">OUR PARTNER</h3>
        <div className="wrapper">
        <div className="wrapper-card">
        <img className="wrappericon2" src="https://i.ibb.co/PMqLFB7/3-D-Logo-Blue.png" />
        </div>
        <div className="wrapper-card">
        <img className="wrappericon2" src="https://i.ibb.co/y4YXvqJ/Logo1.png" />
        </div>
        <div className="wrapper-card">
        <img className="wrappericon2" src="https://i.ibb.co/mCvQhyp/coinswap.png" />
      </div>
        </div>
        </div>
      </section>
    </section>
  );
}

export default Team;
