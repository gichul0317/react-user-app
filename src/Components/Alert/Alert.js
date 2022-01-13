import { useState } from 'react';
import Card from '../Card/Card';
import styles from './Alert.module.scss';

function Alert(props) {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <button className={styles['alert__button']}
            onClick={props.onConfirm}
          >Okay</button>
        </footer>
      </Card>
    </div>

  )
}

export default Alert;