import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './View.scss';
import Dialog from '../Dialog/Dialog';

class View extends Component {
	openDialog = () => {
		console.log('open dialog');
		const component = <Dialog />;
		const node = document.createElement('div');

		document.body.appendChild(node);

		ReactDOM.render(component, node);
	};

	render() {
		return (
			<div>
				<button type="button" onClick={this.openDialog}>OPEN</button>
			</div>
		);
	}
}

export default View;
