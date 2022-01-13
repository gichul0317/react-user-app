import { useRef, useState } from 'react';
import Alert from '../Alert/Alert';
import Wrapper from '../Helpers/Wrapper';
import styles from './Form.module.scss';

function Form(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  const [error, setError] = useState();

  // const textHandler = (e) => {
  //   // console.log(e.target.value);
  //   setName(e.target.value);
  // }

  // const ageHandler = (e) => {
  //   // console.log(e.target.value);
  //   setAge(e.target.value);
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (parseInt(enteredAge) < 1) {
      setError({ title: 'Invalid input', message: 'Please enter a valid age (>0)' });
      return;
    }
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values)' });
      return;
    }
    props.test(enteredName, enteredAge);
    // setName('');
    // setAge('');
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
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
            // onChange={textHandler}
            // value={name}
            ref={nameInputRef}
          />
          <label htmlFor="age"
            className={styles['form__label']}
          >Age (Years)</label>
          <input type="number" name="age"
            className={styles['form__input']}
            // onChange={ageHandler}
            // value={age}
            ref={ageInputRef}
          />
          <button type='submit'
            className={styles['form__button']}
          >Add User</button>
        </div>
      </form>
    </Wrapper>

  )
}

export default Form;