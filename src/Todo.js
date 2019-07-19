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
				<div>
					<form onSubmit={this.handleUpdate}>
						<input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			output = (
				<div>
					<li className={this.props.completed ? 'completed' : ''} onClick={this.handleCompletion}>
						{this.props.task}
					</li>
					<button onClick={this.handleRemove}>X</button>
					<button onClick={this.toggleForm}>Edit</button>
				</div>
			);
		}
		return output;
	}
}

export default Todo;
