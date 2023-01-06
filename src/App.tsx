import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';
import AddTaskForm from './components/forms/AddTaskForm';
import Header from './components/Header';
import { ITask } from './interfaces/task';

import './index.css'
import TaskList from './components/list/TaskList';
import Footer from './components/Footer/Footer';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const showTaskList = () => {
    console.log(taskList)
  }

  return (
    <div className="App">
        <AddTaskForm
        taskList={taskList}
        setTaskList={setTaskList}
        />
      <Header/>
      <AddTaskButton/>
      <TaskList taskList={taskList}/>
      <Footer/>
    </div>
  );
}

export default App;
