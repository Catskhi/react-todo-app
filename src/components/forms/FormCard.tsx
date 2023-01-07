import React, {ChangeEvent, FormEvent, useRef, useState} from 'react';
import DifficultyMenu from './DifficultyMenu';

import { ITask } from '../../interfaces/task';

import styles from './FormCard.module.css'

type process = 'Add' | 'Edit'

interface IFormCard {
    form_title : string,
    task_title : string,
    task_description_title: string,
    difficulty_title: string,
    formButtonValue : string,
    addOrEdit: process,
    addOrEditMethod: Function,
    closeMethod: Function
    task ?: ITask
}

export default function FormCard ({
    form_title,
    task_title,
    task_description_title,
    difficulty_title,
    addOrEdit,
    addOrEditMethod,
    closeMethod,
    formButtonValue,
    task
}: IFormCard) {

    const [currentDifficultyValue, setCurrentDifficultyValue] = useState<string>('')

    
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [taskDescription, setTaskDescription] = useState<string>('')

    // Refference
    const buttonRef = useRef(Function)

    const showOrHideError = (show : boolean) => {
      let error = document.querySelector('#Error')
      if (show === false) {
        error!.classList.add(styles.hide)
      } else {
        error!.classList.remove(styles.hide)
      }
    }

    const clearCard = () => {
      setTaskTitle('')
      setTaskDescription('')
      buttonRef.current()
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
          if (currentDifficultyValue !== ''){
            showOrHideError(false)
            // Add the task
            if (addOrEdit === 'Add') {
                const id = Math.floor(Math.random() * 1000)
                const newTask : ITask = {
                  id: id, 
                  title: taskTitle, 
                  description: taskDescription,
                  // Converts string to ITask['difficulty']
                  difficulty: currentDifficultyValue as ITask['difficulty']
                }
                addOrEditMethod(newTask)
                clearCard()
            } else {
                let currentID : number = task!.id
                task = {
                  id: currentID,
                  title: taskTitle,
                  description: taskDescription,
                  difficulty: currentDifficultyValue as ITask['difficulty']
                }
                addOrEditMethod(task)
                clearCard()
            }
          } else {
            showOrHideError(true)
          }
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.target.id === 'task') {
        setTaskTitle(e.target.value)
      } else {
        setTaskDescription(e.target.value)
      }
    }

  const editTaskClass = (addOrEdit === 'Edit' ? styles.editTaskForm : '')

  return (
    <form onSubmit={handleSubmit}>
    <div className={styles.card + ' ' + editTaskClass}>
      <i
      onClick={() => {
        clearCard()
        closeMethod()
      }}
      className={"bi bi-x-lg " + styles.closeButton}/>
      <h2>{form_title}</h2>
      <h3>{task_title}</h3>
      <input id={'task'}
        value={taskTitle} onChange={handleChange}
        required
        maxLength={50}
       type={'text_title'} className={styles.inputText}/>
      <h3>{task_description_title}</h3>
      <textarea id={'task_description'} 
        value={taskDescription} onChange={handleChange}
        required
        maxLength={100}
        className={styles.inputText}/>
      <h3>{difficulty_title}</h3>
      <DifficultyMenu
        id={addOrEdit === 'Add' ? 'addDropDownItems' : 'editDropDownItems'}
        buttonRef={buttonRef}
        setDifficulty={setCurrentDifficultyValue}/>
      <p id='Error' className={styles.hide + ' ' + styles.Error}>* You must select a difficulty to add the task!</p>
      <button type='submit' className={styles.submitButton}>{formButtonValue}</button>
    </div>
    </form>
  );
}
