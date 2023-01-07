import React from 'react';

import styles from './Footer.module.css'

export default function Footer () {
  return (
    <div className={styles.footer}>
        <h4>By <a href='https://github.com/Catskhi/'
        rel='noreferrer'
        target={'_blank'}
        className={styles.name + ' ' + styles.link}>Catskhi</a> @ <span className={styles.year}>2023</span>
        |
        <a href='https://github.com/Catskhi/react-todo-app'
        rel='noreferrer'
        target={'_blank'}
        className={styles.link + ' ' + styles.projectPage}>Project Page</a>
        </h4>
    </div>
  );
}
