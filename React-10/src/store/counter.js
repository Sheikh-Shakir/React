import { createSlice } from "@reduxjs/toolkit";

// import { createStore } from 'redux';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload
		},
		decrease(state, action) {
			state.counter = state.counter - action.payload
		},
		toggle(state) {
			state.showCounter = !state.showCounter
		},

	}
});


// const counterReducer = (state = initialState, action) => {

// 	if (action.type === 'increment') {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === 'increaseBy5') {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	// if (action.type === 'decreaseBy5') {
// 	// 	return {
// 	// 		counter: state.counter - action.amount,
// 	// 		showCounter: state.showCounter,
// 	// 	};
// 	// }
// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === 'toggle') {
// 		return {
// 			showCounter: !state.showCounter,
// 			counter: state.counter,
// 		};
// 	}
// 	return state;
// };
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
