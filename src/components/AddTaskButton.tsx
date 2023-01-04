import React from 'react';
import styles from './AddTaskButton.module.css'

export default function AddTaskButton () {
  return (
    <div className={styles.AddButtonDiv}>
        <button className={styles.addButton}>Add Task</button>
    </div>
  );
}
