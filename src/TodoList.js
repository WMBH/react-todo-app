import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [] };
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
		this.update = this.update.bind(this);
		this.toggleCompletion = this.toggleCompletion.bind(this);
	}
	create(newTodo) {
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	}
	remove(id) {
		this.setState({
			todos: this.state.todos.filter((t) => t.id !== id)
		});
	}
	update(id, updTask) {
		const updTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: updTask };
			}
			return todo;
		});
		this.setState({ todos: updTodos });
	}
	toggleCompletion(id) {
		const updTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});
		this.setState({ todos: updTodos });
	}
	render() {
		const todos = this.state.todos.map((todo) => {
			return (
				<Todo
					key={todo.id}
					task={todo.task}
					removeTodo={this.remove}
					updateTodo={this.update}
					toggleTodo={this.toggleCompletion}
					completed={todo.isCompleted}
					id={todo.id}
				/>
			);
		});
		return (
			<div>
				<h1>TODO LIST</h1>
				<div>{todos}</div>
				<TodoForm createTodo={this.create} />
			</div>
		);
	}
}

export default TodoList;
