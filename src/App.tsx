import React, { useState } from 'react';
import AddTaskButton from './components/AddTaskButton';
import AddTaskForm from './components/forms/AddTaskForm';
import Header from './components/Header';
import { ITask } from './interfaces/task';

import './index.css'

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
      <button type='button' onClick={showTaskList}>Test</button>
    </div>
  );
}

export default App;
