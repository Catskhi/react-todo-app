import React, { Children, Dispatch, SetStateAction, useEffect, useState } from 'react';

import styles from './DifficultyMenu.module.css'

interface IDifficultyMenu {
  setDifficulty : Dispatch<SetStateAction<string>>
}

export default function DifficultyMenu ({setDifficulty} : IDifficultyMenu) {
  const [difficultyButtonText, setDifficultyButtonText] = useState<string>('Select a Difficulty')

  const showOrHideItems = () => {
      let dropdown = document.getElementById('dropDownItems')
      for (let i:number = 0; i < dropdown!.children.length; i += 1) {
        if (dropdown!.children[i].classList.contains('hide')) {
          dropdown!.children[i].classList.remove('hide')
        } else {
          dropdown!.children[i].classList.add('hide')
        }
      }
  }

  const setButtonValue = (difficulty : string) => {
    let difficultyButton = document.getElementById('difficultyButton')
    difficultyButton!.className = styles.difficultyButton
    switch (difficulty) {
      case 'Very Easy':
          difficultyButton?.classList.add(styles.veryEasy)
          setDifficultyButtonText('Very Easy')
        break;
      case 'Easy':
        difficultyButton?.classList.add(styles.easy)
        setDifficultyButtonText('Easy')
        break;
      case 'Medium':
        difficultyButton?.classList.add(styles.medium)
        setDifficultyButtonText('Medium')
        break;
      case 'Hard':
        difficultyButton?.classList.add(styles.hard)
        setDifficultyButtonText('Hard')
        break;
      case 'Very Hard':
        difficultyButton?.classList.add(styles.veryHard)
        setDifficultyButtonText('Very hard')
        break
    }
    showOrHideItems()
  }

  return (
    <div className={styles.difficultyDropdown}>
      <button id='difficultyButton' className={styles.difficultyButton}
        onClick={showOrHideItems}
      >{difficultyButtonText}</button>
      <div id={'dropDownItems'} className={'dropdown-items'}>
        <button
        onClick={() => setButtonValue('Very Easy')}
        className={ 'hide '
         + styles.veryEasy + ' ' + styles.difficultyButton}>
          Very Easy
        </button>
        <button
        onClick={() => setButtonValue('Easy')}
        className={'hide ' +
        styles.easy + ' ' + styles.difficultyButton}>
          Easy
        </button>
        <button
        onClick={() => setButtonValue('Medium')}
        className={'hide ' +
        styles.medium + ' ' + styles.difficultyButton}>
          Medium
        </button>
        <button
        onClick={() => setButtonValue('Hard')}
        className={'hide ' +
        styles.hard +' ' + styles.difficultyButton}>
          Hard
        </button>
        <button
        onClick={() => setButtonValue('Very Hard')}
        className={'hide ' +
        styles.veryHard + ' ' + styles.difficultyButton}>
          Very Hard
        </button>
      </div>
    </div>
  );
}
