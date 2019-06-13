import React from 'react';
import './App.css';
import View from './components/View/View';
import { DialogsContainer } from './dynamic-modal/create-dynamic-modal';

function App() {
	return (
		<div className="App">
			<DialogsContainer />
			<View/>
		</div>
	);
}

export default App;
