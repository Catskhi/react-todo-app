import React from 'react';
import { ITask } from '../../interfaces/task';

// CSS
import styles from './TaskBox.module.css'

interface ITaskBoxProps {
    task : ITask
}

export default function TaskBox ({task}: ITaskBoxProps) {

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

  return (
    <div id='box' className={styles.taskBox + ' ' + difficultyColor}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className={styles.difficulty}>Difficulty: <span className={difficultyColor}>{task.difficulty}</span></p>
    </div>
  );
}
