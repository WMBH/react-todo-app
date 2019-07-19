import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './TodoForm.css';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createTodo({ ...this.state, id: uuid(), isCompleted: false });
		this.setState({
			task: ''
		});
	}
	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="task" />
				<input
					type="text"
					name="task"
					placeholder="Add a new task"
					id="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add todo</button>
			</form>
		);
	}
}

export default TodoForm;
