const reducer = (state = { counter: 0, message: "warning" }, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter + action.payload};
		case "DECREMENT":
			return { ...state, counter: state.counter - action.payload };
		case "UPDATE_MESSAGE":
			return { ...state, message: state.message + action.payload };
		default:
			return state;
	}
}


export default reducer;