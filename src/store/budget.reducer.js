import { CHANGE_DEBIT } from './budget.actions';

const initialState = {
	debit: 0
};

export function budgetReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_DEBIT:{
			state.debit = 300;

			return state;
		}
		default:
			return state;
	}
}
