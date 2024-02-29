import React , {useState} from 'react';
import Todolist from './todolist'

import './App.css';

function App() {

  const [task,setTask] = useState("");
  const [todo,setTodos] = useState([]);
  const submitHandler = e => {
    e.preventDefault();
    const newTodos = [...todo,task];
    setTodos(newTodos);
    setTask("");
  }

  const handleDelete = (indexvalue) => {
    const newlist = todo.filter((task,index) => index !== indexvalue);
    console.log(newlist);
    setTodos(newlist);
  }
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">To Do Management Application</h5>
          <form onSubmit={submitHandler}>
            <input type="text" name ="task" value={task} onChange={e => setTask(e.target.value)}></input> &nbsp;
            <input type="submit" name ="Add" value="Add"></input>
          </form>
          {todo.length >= 1 ? <Todolist todolist={todo} handleDelete={handleDelete} /> : <h3>No items in the list</h3>}
        </div>
      </div>
    </div>
  );
}

export default App;
