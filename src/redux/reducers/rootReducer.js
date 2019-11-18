const initialState = {
    answer: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RANDOM':
            const randomNumber = Math.floor(Math.random() * 2);
            return {
                answer: randomNumber >= 1 ? 'YES' : 'NO'
            }
        default:
            return state;
    }
};

export default rootReducer;