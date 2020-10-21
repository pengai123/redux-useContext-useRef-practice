import React, {useContext} from 'react'
import { counterContext } from "./App"

export default function Counter2() {

	const counter2 = useContext(counterContext)

	return (
		<div>
			<p>
				Counter: {counter2.counter}
			</p>
			<button onClick={counter2.handleIncrement}>+</button>
			<button onClick={counter2.handleDecrement}>-</button>
		</div>
	)
}
