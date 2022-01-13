import styles from './Output.module.scss';
import Card from '../Card/Card';

function Output(props) {



  return (
    <div className={styles.output}>
      <ul className={styles['output__list']}>
        {
          props.testdata.map(item => {
            return (
              <li key={item.id}
                className={styles['output__li']}
              >
                {`${item.user} (${item.age} years old)`}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Output;