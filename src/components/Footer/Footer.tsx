import React from 'react';

import styles from './Footer.module.css'

export default function Footer () {
  return (
    <div className={styles.footer}>
        <h4>By <a href='https://github.com/Catskhi/'
        target={'_blank'}
        className={styles.name}>Catskhi</a> @ 2023</h4>
    </div>
  );
}
