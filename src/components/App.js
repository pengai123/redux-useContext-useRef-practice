import React, { useRef, useEffect, useState } from 'react';
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
	const renderCountRef = useRef(0)
	const inputRef = useRef()
	const [messageInput, setMessageInput] = useState("")

	useEffect(() => {
		inputRef.current.focus();
	}, [])

	useEffect(() => {
		renderCountRef.current = renderCountRef.current + 1;
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

	const handleMsgUpdate = e => {
		e.preventDefault();
		if (messageInput) {
			dispatch(updateMsg(messageInput))
			setMessageInput("")
		}

	}

	const handleIncrement = e => {
		e.preventDefault();
		dispatch(increment(5))
	}

	const handleDecrement = e => {
		e.preventDefault();
		dispatch(decrement())
	}

	const handleKeyPress = e => {
		console.log("key pentered: ", e.key)
		if (e.key === "Enter" && messageInput) {
			dispatch(updateMsg(messageInput))
			setMessageInput("")
		}
	}
	return (
		<div className="App">
			<div className="App-header">
				<div>
					<img src={logo} className="App-logo" alt="logo" />
					<h3>Counter 1 with Redux</h3>
					<button onClick={handleIncrement}>+</button>
					<span className="counter">
						Counter: {counter}
					</span>
					<button onClick={handleDecrement}>-</button>
				</div>
				<counterContext.Provider value={{ counter, handleIncrement, handleDecrement }}>
					<h3>Counter 2 with useContext</h3>
					<Counter2 />
					<h3>Counter 3 with Context class style</h3>
					<Counter3 />
				</counterContext.Provider>
				<h3>Update message with Redux: {message}</h3>
				<div>
					<input ref={inputRef} value={messageInput} 
					onChange={(e) => setMessageInput(e.target.value)} 
					onKeyPress={handleKeyPress}
					placeholder="Enter New Message..." />
					<button onClick={handleMsgUpdate}>UPDATE</button>
				</div>
				<h3>useRef Practice</h3>
				<div>render counter: {renderCountRef.current}</div>
			</div>
		</div>
	);
}

export default App;
