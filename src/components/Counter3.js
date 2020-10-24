import React, { Component } from 'react'
import { counterContext } from "./App"

export default class Counter3 extends Component {
	render() {
		return (
			<counterContext.Consumer>
				{context => (
					<div>
						<button onClick={context.handleIncrement}>+</button>
						<span className="counter">
							Counter: {context.counter}
						</span>
						<button onClick={context.handleDecrement}>-</button>
					</div>
				)}
			</counterContext.Consumer>
		)
	}
}
