import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ReactDOM from 'react-dom';

class Dialog {
	openDialog(Component) {
		const modals = document.getElementById('dialogs-container');
		const node = document.createElement('div');
		const close = () => modals.removeChild(node);

		const renderComponent = (
			<Provider store={store}>
				{<Component close={close} />}
			</Provider>
		);

		modals.appendChild(node);
		ReactDOM.render(renderComponent, node);
	}
}

export const dialog = new Dialog();

export class DialogsContainer extends Component {
	render() {
		return <div id="dialogs-container" />;
	}
}
