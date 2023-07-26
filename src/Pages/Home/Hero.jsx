import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Container, Row, Col, Button } from "reactstrap";
import logo1 from "../../Assets/twitter.webp";
import logo2 from "../../Assets/telegram.png";
import classes from "./Hero.css";

class Panel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
			const height = el.querySelector('.panel__inner').scrollHeight;
			this.setState({
				height
			});
		}, 333);
	}

	render () {
		const { label, content, activeTab, index, activateTab } = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		const innerStyle = {
			height:  `${isActive ? height : 0}px`
		}

		return (
			<div className='panel'
				role='tabpanel'
				aria-expanded={ isActive }>
				<button className='panel__label'
					role='tab'
					onClick={ activateTab }>
					{ label }
				</button>
				<div className='panel__inner'
					style={ innerStyle }
					aria-hidden={ !isActive }>
					<p className='panel__content'>
						{ content }
					</p>
				</div>
			</div>
		);
	}
}

class Accordion extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: -1
		};

		this.activateTab = this.activateTab.bind(this);
	}

	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}

	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
		return (
			<div className='accordion' role='tablist'>
				{panels.map((panel, index) =>
					<Panel
						key={ index }
						activeTab={ activeTab }
						index={ index }
						{ ...panel }
						activateTab={ this.activateTab.bind(null, index) }
					/>
				)}
			</div>
		);
	}
}

const panels = [
	{
		label: 'Minting Price',
		content: 'Each Lotto Ticket have a mint price 2 Mantle Tokens',
	},
	{
		label: 'How To get $OriginX tokens',
		content: 'You can get $OriginX tokens only from NFT. Mint $Lotto Ticket and get $OriginX tokens',
	},
	{
		label: 'How much $OriginX tokens for 1 NFT you will get?',
		content: 'For every purchase 1 NFT, you will received NA $OriginX tokens. apply to multiply',
	},
];

const Hero = () => {
return (
    <section className="block" style={{paddingTop: "100px", paddingButtom: "100px"}}>
      <div className="container">
        <div className="featureheader">
          <h3 className="featurecontenthero">
          OriginX Lottery
          </h3>
            </div>
            <div className="title">
              <h3 className="subfeaturecontenthero navtext">
                Mint the lottery ticket NFTs to win the biggest jackpot
              </h3>
              <Col className="featurebtngroup">
              <a
              href="#/NFT_minting"
              className="btn2"
              >Buy Tickets</a
              >
							<a
              href="https://mirror.xyz/0xc2A27043469197Baa71601ff067504e1D4ED4E5a/lIfNAnbfoa-7Wi2P8-EFRuSLJAs7m4DG7QwkN5dPPCM"
              className="btn2"
              >Read Docs</a
              >
              </Col>
            </div>
        </div>
        <section className="sectionabout" background-color="#10083B" style={{marginTop: "150px", marginBottom: "200px"}} id="UniqueApe">
          <div className="container">
          <h3 className="feature-content2">ABOUT US</h3>
          <div className="wrappercard2">
           <Row>
            <Col>
            <h3 className="feature-content3">Lottery Platform</h3>
            <p className="subrarity-content">
            OriginX Platform is a lottery and NFT minting platform built especially for the community.
    Every NFT or $OriginX token holder has a chance to win daily jackpot rewards at OriginX Platform .
    The OriginX platform is built on top of the Mantle network. Which chain has very good advantages.
    Very low transaction fees made us choose Mantle as a network to create a OriginX platform.
            </p>
            </Col>
            </Row>
            </div>
          </div>
        </section>
        <section className="containerroad" background-color="#10083B" style={{marginTop: "50px", marginBottom: "50px"}}>
        <div>
        <h3 className="feature-content2">TIMELINE SCHEDULE</h3>
          <div className="timeline">
      <div className="container1 left">
        <div className="content">
          <h2>Phase 1</h2>
          <p>
            IDEA<br />
            Website<br />
            Smart Contract
          </p>
        </div>
      </div>
      <div className="container1 right">
        <div className="content">
          <h2>Phase II</h2>
          <p>
            Chain Integrated <br />
            Build Community
          </p>
        </div>
      </div>
      <div className="container1 left">
        <div className="content">
          <h2>Phase III</h2>
          <p>
            Partnership <br />
            Minting Start <br />
            NFT Lottery
          </p>
        </div>
      </div>
      <div className="container1 right">
        <div className="content">
          <h2>Distribution</h2>
          <p>
            Token Distribution <br />
            Token lottery start
          </p>
        </div>
      </div>
    </div>
    </div>
        </section>
        <section className="section" id="faq" style={{marginTop: "100px", marginBottom: "100px"}}>
          <Container>
            <h3 className="feature-content2">PROJECT FAQS</h3>
            <Accordion panels={ panels }/>
          </Container>
        </section>
        <section background-color="#10083B" style={{marginTop: "200px"}}>
          <div className="hero2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="herotitle">
                  JOIN OUR COMMUNITY
                </h1>
                <div className="wrapper">
                <Button className="SocialMedia2" style={{background: "#71B3FF"}}>
								<img src={logo1} href="https://t.me/lotto_nfts" className="sociallogo"/>
								<a
									href="https://t.me/lotto_nfts"
									>TELEGRAM</a
								>
                </Button>
                <Button className="SocialMedia2" style={{background: "#71B3FF"}}>
								<img src={logo2} href="https://twitter.com/lotto_nfts" className="sociallogo"/>
								<a
									href="https://twitter.com/lotto_nfts"
									>TWITTER</a
								>
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
					<a
						href="#/NFT_minting"
						>Minting</a
					>
          </Button>
          <Button className="SocialMedia">
					<a
						href="#/NFT_lottery"
						>NFT Lottery</a
					>
          </Button>
          <Button className="SocialMedia">
					<a
						href="#/staking"
						>Staking</a
					>
          </Button>
          </div>
        </div>
        </section>
    </section>
  );
}

export default Hero;
