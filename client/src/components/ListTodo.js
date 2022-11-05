import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";
const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  //delete todo function

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`,
        {
          method: "DELETE"
        });

      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
  async function getTodos() {
    const response = await fetch("http://localhost:5000/todos");

    const todoArray = await response.json()
    setTodos(todoArray)
  }

  useEffect(() => {
    getTodos()
  }, [])
  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* reference for tables  */}
        {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            </tr> */}
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo={todo} /></td>
                <td><button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodo;