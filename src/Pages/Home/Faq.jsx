import React from 'react';
import ReactDOM from 'react-dom'
import { Container } from "reactstrap";
import classes from "./Faq.css";

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
		content: 'Each Bored Cat will have a mint price 500.000.000 Brise',
	},
	{
		label: 'Mint Maximum',
		content: 'Each Whitelisted and public sale participant can mint up to 5 Bored Cat.',
	},
	{
		label: 'How do Reward Work?',
		content: 'For every purchase 3-5 NFT will recieved 1-2 Bored Cat after first ofiicial listing',
	},
];

const Faq = () => {

  return (
    <section className="section" id="faq" style={{marginTop: "100px", marginBottom: "100px"}}>
      <Container>
        <h3 className="feature-content2">PROJECT FAQS</h3>
        <Accordion panels={ panels }/>
      </Container>
    </section>
  );
}

export default Faq;
