import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import random from './redux/actions/actions';

export const App = () => {
	const answer = useSelector(state => state.answer);
	const dispatch = useDispatch();

	const buttonClick = () => dispatch(random());

	return (
		<section>
			<h4>RandomQ.</h4>
			<button onClick={buttonClick}>Random</button>
			<h4>{answer}</h4>
		</section>
	);
};
