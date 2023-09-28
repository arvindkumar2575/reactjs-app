import React, { useState, useEffect } from 'react'
import './Todo.css'
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export const Todo = () => {

	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem("todos");
		if (savedTodos) {
			return JSON.parse(savedTodos);
		} else {
			return [];
		}
	})
	const [todo, setTodo] = useState("");

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

	// function to create a new object on form submit
	const addTodo = () => {
		if (todo !== "") {
			setTodos([...todos, todo])
			setTodo("");
		}
	}

	return (
		<div className='todo pt-50'>
			<div className='container'>
				<h4>Todo App</h4>
				<div className='row'>
					<TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
					<TodoList todos={todos} />
				</div>
			</div>
		</div>
	)
}
