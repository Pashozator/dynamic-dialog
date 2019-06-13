import React, { Component } from 'react';
import './View.css';
import Dialog from '../Dialog/Dialog';
import { connect } from 'react-redux';
import { changeDebit } from '../../store/budget.actions';
import { createDynamicModal, dialog } from '../../dynamic-modal/dialog-with-redux';

class View extends Component {
	openDialog = () => {
		// const modals = document.getElementById('modals');
		// const node = document.createElement('div');
		// const onClose = () => modals.removeChild(node);
		//
		// const component = (
		// 	<Provider store={store}>
		// 		<Dialog onClose={onClose}/>
		// 	</Provider>
		// );
		//
		// modals.appendChild(node);
		// ReactDOM.render(component, node);
		dialog.open(Dialog);
	};

	changeDebit = () => {
		this.props.changeDebit();
	};

	render() {
		return (
			<div>
				<button type="button" onClick={this.openDialog}>OPEN</button>
				<button type="button" onClick={this.changeDebit}>CHANGE DEBIT</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	changeDebit: () => dispatch(changeDebit())
});

export default connect(null, mapDispatchToProps)(View);
