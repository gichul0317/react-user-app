import { useState } from 'react';
import styles from './Alert.module.scss';

function Alert() {
  const [page, setPage] = useState(false);

  const clickHandler = () => {
    setPage(true);
  }

  if (!page) {
    return (
      <div className={styles.alert}>
        <div className={styles['alert__container']}>
          <div className={styles['alert__titlebox']}>
            <h1 className={styles['alert__title']}>Invalid input</h1>
          </div>
          <p>Please enter a valid name and age (non-empty values).</p>
          <button className={styles['alert__button']}
            onClick={clickHandler}
          >Okay</button>
        </div>
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default Alert;