import React, {useContext} from 'react'
import { counterContext } from "./App"

export default function Counter2() {

	const counter2 = useContext(counterContext)

	return (
		<div>
			<button onClick={counter2.handleIncrement}>+</button>
			<span className="counter">
				Counter: {counter2.counter}
			</span>
			<button onClick={counter2.handleDecrement}>-</button>
		</div>
	)
}
