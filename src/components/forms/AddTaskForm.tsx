import React from 'react'

import { ITask } from '../../interfaces/task'

// Styles 
import styles from './AddTaskForm.module.css'
import FormCard from './FormCard'

export interface ITaskForm {
    title: string
}

export default function AddTaskForm ({title}: ITaskForm) {
    return (
        <div className={styles.centralize}>
            <div className={styles.fade}></div>
            <div className={styles.form}>
                <FormCard 
                    form_title={'Add a Task'}
                    task_title={'Task Title'}
                    task_description_title={'Task Description'}
                    difficulty_title={'Difficulty'}
                />
            </div>
        </div>
    )
}