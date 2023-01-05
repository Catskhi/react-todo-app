import React, { Children, Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from 'react';

import styles from './DifficultyMenu.module.css'

interface IDifficultyMenu {
  setDifficulty : Dispatch<SetStateAction<string>>
  buttonRef: MutableRefObject<Function>
}

export default function DifficultyMenu ({setDifficulty, buttonRef} : IDifficultyMenu) {
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

  // Reset button
  buttonRef.current = function resetButton() {
    setButtonValue('')
    showOrHideItems()
  }

  const setButtonValue = (difficulty : string) => {
    let difficultyButton = document.getElementById('difficultyButton')
    difficultyButton!.className = styles.difficultyButton
    switch (difficulty) {
      case 'Very Easy':
          difficultyButton?.classList.add(styles.veryEasy)
          setDifficultyButtonText('Very Easy')
          setDifficulty('Very Easy')
        break;
      case 'Easy':
        difficultyButton?.classList.add(styles.easy)
        setDifficultyButtonText('Easy')
        setDifficulty('Easy')
        break;
      case 'Medium':
        difficultyButton?.classList.add(styles.medium)
        setDifficultyButtonText('Medium')
        setDifficulty('Medium')
        break;
      case 'Hard':
        difficultyButton?.classList.add(styles.hard)
        setDifficultyButtonText('Hard')
        setDifficulty('Hard')
        break;
      case 'Very Hard':
        difficultyButton?.classList.add(styles.veryHard)
        setDifficultyButtonText('Very Hard')
        setDifficulty('Very Hard')
        break
      default:
        difficultyButton!.className = styles.difficultyButton
        setDifficultyButtonText('Select a Difficulty')
        setDifficulty('')
        break;
    }
    showOrHideItems()
  }

  return (
    <div className={styles.difficultyDropdown}>
      <button type='button' id='difficultyButton' className={styles.difficultyButton}
        onClick={showOrHideItems}
      >{difficultyButtonText}</button>
      <div id={'dropDownItems'} className={'dropdown-items'}>
        <button type='button'
        onClick={() => setButtonValue('Very Easy')}
        className={ 'hide '
         + styles.veryEasy + ' ' + styles.difficultyButton}>
          Very Easy
        </button>
        <button type='button'
        onClick={() => setButtonValue('Easy')}
        className={'hide ' +
        styles.easy + ' ' + styles.difficultyButton}>
          Easy
        </button>
        <button type='button'
        onClick={() => setButtonValue('Medium')}
        className={'hide ' +
        styles.medium + ' ' + styles.difficultyButton}>
          Medium
        </button>
        <button type='button'
        onClick={() => setButtonValue('Hard')}
        className={'hide ' +
        styles.hard +' ' + styles.difficultyButton}>
          Hard
        </button>
        <button type='button'
        onClick={() => setButtonValue('Very Hard')}
        className={'hide ' +
        styles.veryHard + ' ' + styles.difficultyButton}>
          Very Hard
        </button>
      </div>
    </div>
  );
}
