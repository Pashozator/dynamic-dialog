import React, { Component } from 'react';
import './Dialog.scss';
import { selectDebit } from '../../store/budget.selectors';
import { connect } from 'react-redux';

class Dialog extends Component {
	componentDidMount() {
		console.log(this.props.debit);
	}

	render() {
		return (
			<div className="dialog" />
		);
	}
}

const mapStateToProps = state => ({
	debit: selectDebit(state)
});

export default connect(mapStateToProps, null)(Dialog);
