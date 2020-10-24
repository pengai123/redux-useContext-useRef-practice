import React, { Component } from 'react'
import { counterContext } from "./App"

export default class Counter3 extends Component {
	render() {
		return (
			<counterContext.Consumer>
				{context => (
					<div>
						<p>
							Counter: {context.counter}
						</p>
						<button onClick={context.handleIncrement}>+</button>
						<button onClick={context.handleDecrement}>-</button>
					</div>
				)}
			</counterContext.Consumer>
		)
	}
}
