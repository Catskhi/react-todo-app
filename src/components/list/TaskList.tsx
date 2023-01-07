import React, {Dispatch, SetStateAction, useState} from 'react';
import { ITask } from '../../interfaces/task';
import EditTaskForm from '../forms/EditTaskForm';
import TaskBox from './TaskBox';

// CSS
import styles from './TaskList.module.css'

export interface IListProps {
    taskList : ITask[]
    taskListSetter : Dispatch<SetStateAction<ITask[]>>
}

export default function TaskList ({taskList, taskListSetter}: IListProps) {

  const [taskToEdit, setTaskToEdit] = useState<ITask>()

  const showTaskEditForm  = (task : ITask) => {
    if (task) {
      setTaskToEdit(task)
      const editForm = document.getElementById('editForm')
      editForm!.classList.remove('hide')
    }
  }

  return (
    <>
      <EditTaskForm taskListSetter={taskListSetter} taskList={taskList} task={taskToEdit}/>
      <div className={styles.taskList}>
          {taskList.length > 0 ? taskList.map((task) => (
            <TaskBox showEditFormMethod={showTaskEditForm} key={task.id} task={task}/>
          )) : <p className={styles.advice}>You have no current tasks!</p>}
      </div>
    </>
  );
}
