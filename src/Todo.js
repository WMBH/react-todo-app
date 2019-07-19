import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleCompletion = this.handleCompletion.bind(this);
	}
	handleRemove() {
		this.props.removeTodo(this.props.id);
	}
	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleCompletion() {
		this.props.toggleTodo(this.props.id);
	}
	render() {
		let output;
		if (this.state.isEditing) {
			output = (
				<div className="Todo">
					<form className="Todo-edit-form" onSubmit={this.handleUpdate}>
						<input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			output = (
				<div className="Todo">
					<li
						className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
						onClick={this.handleCompletion}
					>
						{this.props.task}
					</li>
					<div className="Todo-buttons">
						<button onClick={this.handleRemove}>
							<i className="fas fa-trash" />
						</button>
						<button onClick={this.toggleForm}>
							<i className="fas fa-pen" />
						</button>
					</div>
				</div>
			);
		}
		return output;
	}
}

export default Todo;
