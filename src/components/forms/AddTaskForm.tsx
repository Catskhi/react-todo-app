import React, { Dispatch, SetStateAction } from 'react'

import { ITask } from '../../interfaces/task'

// Styles 
import styles from './AddTaskForm.module.css'
import Fade from './Fade'
import FormCard from './FormCard'

export interface ITaskForm {
    taskList: ITask[],
    setTaskList: Dispatch<SetStateAction<ITask[]>>,
}

export default function AddTaskForm ({taskList, setTaskList}: ITaskForm) {

    const addTask = (newTask : ITask) => {
        setTaskList([...taskList, newTask])
        closeForm()
    }
    
    const closeForm = () => {
        let addForm = document.getElementById('addForm')
        addForm!.classList.add('hide')
    }

    return (
        <div id='addForm' className={styles.centralize + ' hide'}
            
        >
            <Fade/>
            <div className={styles.form}>
            <div id='form'>
                <FormCard 
                    form_title={'Add a Task'}
                    task_title={'Task Title'}
                    task_description_title={'Task Description'}
                    difficulty_title={'Difficulty'}
                    formButtonValue={'Add Task'}
                    addOrEdit={'Add'}
                    addOrEditMethod={addTask}
                    closeMethod={closeForm}
                />
            </div>
            </div>
        </div>
    )
}