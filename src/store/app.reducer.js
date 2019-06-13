import { combineReducers } from 'redux';
import { budgetReducer } from './budget.reducer';

export const appReducer = combineReducers({
	budget: budgetReducer
});
