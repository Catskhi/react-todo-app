import React from 'react';
import { ITask } from '../../interfaces/task';

// CSS
import styles from './TaskBox.module.css'

interface ITaskBoxProps {
    task : ITask
    showEditFormMethod : Function
}

export default function TaskBox ({task, showEditFormMethod}: ITaskBoxProps) {

    let difficultyColor
    switch (task.difficulty) {
        case 'Very Easy':
            difficultyColor = styles.VeryEasy
            break
        case 'Easy':
            difficultyColor = styles.Easy
            break
        case 'Medium':
            difficultyColor = styles.Medium
            break
        case 'Hard':
            difficultyColor = styles.Hard
            break
        case 'Very Hard':
            difficultyColor = styles.VeryHard
            break
        }
    
    const editTask = () => {
      showEditFormMethod(task)
    }

  return (
    <div id='box' className={styles.taskBox + ' ' + difficultyColor}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className={styles.difficulty}>Difficulty: <span className={difficultyColor}>{task.difficulty}</span>
        <i className={"bi bi-pencil-square " + styles.editButton + '  ' +
        styles.boxButtonGeneric}
        onClick={editTask}
        />
        <i className={"bi bi-trash-fill " + styles.boxButtonGeneric + ' ' + styles.trashButton}

        />
      </div>
    </div>
  );
}
