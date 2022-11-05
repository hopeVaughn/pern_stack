import React, { Fragment } from 'react';
import { InputTodo, EditTodo, ListTodo } from './components/index';
import './App.css';
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  )
}

export default App;
