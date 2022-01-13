import { useState } from 'react';
import Alert from '../Alert/Alert';
import styles from './Form.module.scss';

function Form(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

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
    if (parseInt(age) < 1) {
      setError({ title: 'Invalid input', message: 'Please enter a valid age (>0)' });
      return;
    }
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values)' });
      return;
    }
    props.test(name, age);
    setName('');
    setAge('');
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {
        error ? <Alert title={error.title} message={error.message} onConfirm={errorHandler} /> : null
      }
      {/* <Alert title='An error occured!' message='something went wrong!' /> */}
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
    </>

  )
}

export default Form;