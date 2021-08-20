const initialState = {
	answer: null
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RANDOM':
			const randomAnswer = Math.floor(Math.random() * 2) >= 1 ? 'YES' : 'NO';
			return {
				answer: randomAnswer 
			}
		default:
			return state;
	}
};

export default rootReducer;
