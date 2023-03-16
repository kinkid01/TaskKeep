import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import './App.css';

function App() {
const [tasklist, setTasklist] = useState (JSON.parse(localStorage.getItem("tasklist")) || []);
const [task, setTask] = useState({});

useEffect(() => {
  localStorage.setItem("tasklist", JSON.stringify(tasklist))
}, [tasklist]);

  return (
    <div className="App">
    <Header />
    <AddTask 
    taskList={tasklist} 
    setTasklist={setTasklist} 
    task={task}
    setTask={setTask}
    />

    <ShowTask 
    taskList={tasklist} 
    setTasklist={setTasklist} 
    task={task}
    setTask={setTask}
    /> 
    </div>
  
  );
}

export default App;
