import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

const containerId = 'dynamic-dialogs-container-with-redux';

class DynamicDialogWithRedux {
	constructor() {
		this.store = null;
	}

	setStore(store) {
		this.store = store;
	}

	open(Component) {
		const container = document.getElementById(containerId);
		const node = document.createElement('div');
		const close = () => container.removeChild(node);

		const renderComponent = (
			<Provider store={this.store}>
				<Component close={close} />
			</Provider>
		);

		container.appendChild(node);
		ReactDOM.render(renderComponent, node);
	}
}

export const dialog = new DynamicDialogWithRedux();

export class DynamicDialogsContainerWithRedux extends Component {
	componentDidMount() {
		dialog.setStore(this.props.store);
	}

	render() {
		return <div id={containerId} />;
	}
}
