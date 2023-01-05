import React, {useEffect, useState} from 'react';
import DifficultyMenu from './DifficultyMenu';

import styles from './FormCard.module.css'

interface IFormCard {
    form_title : string,
    task_title : string,
    task_description_title: string,
    difficulty_title: string
}

export default function FormCard ({
    form_title,
    task_title,
    task_description_title,
    difficulty_title
}: IFormCard) {

    const [currentDifficultyValue, setCurrentDifficultyValue] = useState<null | string>(null)

  return (
    <div className={styles.card}>
      <h2>{form_title}</h2>
      <h3>{task_title}</h3>
      <input id={'taskTitle'}
        maxLength={50}
       type={'text'} className={styles.inputText}/>
      <h3>{task_description_title}</h3>
      <textarea id={'descriptionTitle'} 
        maxLength={364}
        className={styles.inputText}/>
      <h3>{difficulty_title}</h3>
      <DifficultyMenu setDifficulty={() => setCurrentDifficultyValue}/>
    </div>
  );
}
