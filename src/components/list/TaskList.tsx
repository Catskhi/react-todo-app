import React from 'react';
import { ITask } from '../../interfaces/task';
import TaskBox from './TaskBox';

// CSS
import styles from './TaskList.module.css'

export interface IListProps {
    taskList : ITask[]
}

export default function TaskList ({taskList}: IListProps) {
  return (
    <div className={styles.taskList}>
        {taskList.length > 0 ? taskList.map((task) => (
          <TaskBox key={task.id} task={task}/>
        )) : <p className={styles.advice}>You have no current tasks!</p>}
    </div>
  );
}
