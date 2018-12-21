import React, { Component } from 'react';

class AutoShrinking extends React.Component {
	constructor() {
		super();
		this.state = {
			scale: 1
		}
	}

	componentDidUpdate() {
		const { scale } = this.state;
		const node = this.node;
		const parentNode = node.parentNode;

		const availableWidth = parentNode.offsetWidth;
		const actualWidth = node.offsetWidth;
		const actualScale = availableWidth / actualWidth;

		if(scale === actualScale)
			return

		if (actualScale < 1) {
			this.setState({ scale: actualScale});
		}
		else if (scale < 1) {
			this.setState({ scale: 1 })
		}
	}

	render() {
		const { scale } = this.state;
		return <div className="display-screen"><div 
		className="display" 
		style = {{ transform: `scale(${scale}, ${scale})` }}
		ref={node => this.node = node}>{this.props.children}</div></div>
		} 
}


export default AutoShrinking;