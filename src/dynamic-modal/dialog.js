import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const containerId = 'dynamic-dialogs-container';

class DynamicDialog {
	open(Component) {
		const container = document.getElementById(containerId);
		const node = document.createElement('div');
		const close = () => container.removeChild(node);

		const renderComponent = <Component close={close} />;

		container.appendChild(node);
		ReactDOM.render(renderComponent, node);
	}
}

export const dialog = new DynamicDialog();

export class DynamicDialogsContainer extends Component {
	render() {
		return <div id={containerId} />;
	}
}
