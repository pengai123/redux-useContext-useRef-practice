import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

// build another counter with useContext
import Counter2 from "./Counter2"
import Counter3 from "./Counter3"

export const counterContext = React.createContext()

function App() {

	const counter = useSelector(state => state.counter);
	const message = useSelector(state => state.message)
	const dispatch = useDispatch();
	// const state = useSelector(state => state)
	const renderCounter = useRef(0)
	const btnFocus = useRef()

	useEffect(() => {
		btnFocus.current.focus();
	}, [])

	useEffect(() => {
		renderCounter.current = renderCounter.current + 1;
		console.log('renderCounter:', renderCounter)
		console.log('btnFocus:', btnFocus)
	})
	// let storeState = store.getState(); 
	// console.log('storeState from app.js:', storeState)


	const updateMsg = msg => {
		return {
			type: "UPDATE_MESSAGE",
			payload: msg
		}
	}

	const increment = (val = 1) => {
		return {
			type: "INCREMENT",
			payload: val
		}
	}

	const decrement = (val = 1) => {
		return {
			type: "DECREMENT",
			payload: val
		}
	}

	const handleMsg = e => {
		e.preventDefault();

		dispatch(updateMsg("!"))

	}

	const handleIncrement = e => {
		e.preventDefault();
		dispatch(increment(5))
	}

	const handleDecrement = e => {
		e.preventDefault();
		dispatch(decrement())
	}

	return (
		<div className="App">
			<div className="App-header">
				<div>
					<img src={logo} className="App-logo" alt="logo" />
					<h3>Counter 2 with Redux</h3>
					<p>
						Counter: {counter}
					</p>
					<button onClick={handleIncrement}>+</button>
					<button onClick={handleDecrement}>-</button>
				</div>
				<p>
					Message: {message}
				</p>
				<button onClick={handleMsg}>UPDATE</button>
				<h3>useRef Practice</h3>
				<div>render counter: {renderCounter.current}</div>
				<input ref={btnFocus} />

				<counterContext.Provider value={{ counter, handleIncrement, handleDecrement }}>
					<h3>Counter 2 with useContext</h3>
					<Counter2 />
					<h3>Counter 3 with Context class style</h3>
					<Counter3 />
				</counterContext.Provider>
			</div>
		</div>
	);
}

export default App;
