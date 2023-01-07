import React, { Dispatch, SetStateAction } from 'react';
import { ITask } from '../../interfaces/task';
import Fade from './Fade';

// CSS 

import styles from './EditTaskForm.module.css'
import FormCard from './FormCard';

interface IEditTaskForm {
    taskList : ITask[]
    task : ITask | undefined
    taskListSetter : Dispatch<SetStateAction<ITask[]>>
}

export default function EditTaskForm ({task, taskList, taskListSetter} : IEditTaskForm) {

  const editTask = (editedTask : ITask) => {
      const editedTaskList = taskList.map((taskItem) => {
        return taskItem.id === editedTask.id ? editedTask : taskItem
      })
      taskListSetter(editedTaskList)
      closeForm()
  }

  const closeForm = () => {
      const editForm = document.getElementById('editForm')
      editForm!.classList.add('hide')
  }

  return (
    <div id={'editForm'} className={styles.centralize + ' hide'}>
      <Fade/>
      <div className={styles.editForm}>
          <FormCard
              form_title={'Edit The Task'}
              task_title={'New Task Title'}
              task_description_title={'New Task Description'}
              difficulty_title={'New Difficulty'}
              formButtonValue={'Edit Task'}
              addOrEdit={'Edit'}
              addOrEditMethod={editTask}
              closeMethod={closeForm}
              task={task}
          />
      </div>
    </div>
  );
}
