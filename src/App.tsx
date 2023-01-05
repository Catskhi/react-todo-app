import React from 'react';
import AddTaskButton from './components/AddTaskButton';
import AddTaskForm from './components/forms/AddTaskForm';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <AddTaskForm title={'Add your task'}/>
      <Header/>
      <AddTaskButton/>
    </div>
  );
}

export default App;
