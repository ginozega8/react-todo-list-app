import React, {useState} from 'react'
import TodoForm from "./TodoForm"
import Todo from "./Todo"

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /⌃\s*$/.test(todo.text)) { //Prevent empty todos
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    };

    const updateTodo = (todoId, newValue) => {
   
            if (!newValue.text || /⌃\s*$/.test(newValue.text)) { //Prevent empty todos
                return
            }

            setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
        return todo
        })
        setTodos(updatedTodos);
    };

  return (
    <div className='todo-list'>
        <h1>To Do List</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList