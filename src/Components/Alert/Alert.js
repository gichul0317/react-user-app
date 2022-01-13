import { useState } from 'react';
import Card from '../Card/Card';
import styles from './Alert.module.scss';

function Alert(props) {
  const [page, setPage] = useState(false);

  const clickHandler = () => {
    setPage(true);
  }

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <button className={styles['alert__button']}
          onClick={clickHandler}
        >Okay</button>
      </footer>
    </Card>
  )
}

export default Alert;