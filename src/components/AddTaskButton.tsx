import React from 'react';
import styles from './AddTaskButton.module.css'

interface IAddTaskButton {

}

export default function AddTaskButton () {

  const showAddTaskForm = () => {
    const addForm = document.getElementById('addForm')
    addForm!.classList.remove('hide')
  }

  return (
    <div className={styles.AddButtonDiv}>
        <button
        onClick={showAddTaskForm}
        type='button' className={styles.addButton}>Add Task</button>
    </div>
  );
}
