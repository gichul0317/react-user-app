import { useState } from 'react';
import Alert from '../Alert/Alert';
import styles from './Form.module.scss';

function Form(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const textHandler = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  }

  const ageHandler = (e) => {
    // console.log(e.target.value);
    setAge(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length > 0 && age.trim().length > 0) {
      props.test(name, age);
    }
    setName('');
    setAge('');
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['form__container']}>
        <label htmlFor="username"
          className={styles['form__label']}
        >Username</label>
        <input type="text" name="username"
          className={styles['form__input']}
          onChange={textHandler}
          value={name}
        />
        <label htmlFor="age"
          className={styles['form__label']}
        >Age (Years)</label>
        <input type="number" name="age"
          className={styles['form__input']}
          onChange={ageHandler}
          value={age}
        />
        <button type='submit'
          className={styles['form__button']}
        >Add User</button>
      </div>
    </form>
  )
}

export default Form;