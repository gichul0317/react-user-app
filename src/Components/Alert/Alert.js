import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from './Alert.module.scss';
import ReactDOM from 'react-dom';

function Backdrop(props) {
  return (
    <div className={styles.backdrop} onClick={props.onConfirm} >
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

// function ModalOverlay(props) {
//   return (
//     <Card className={styles.modal}>
//       <header className={styles.header}>
//         <h2>{props.title}</h2>
//       </header>
//       <div className={styles.content}>
//         <p>{props.message}</p>
//       </div>
//       <footer className={styles.actions}>
//         <button className={styles['alert__button']}
//           onClick={props.onConfirm}
//         >Okay</button>
//       </footer>
//     </Card>
//   )
// }


function Alert(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} title={props.title} message={props.message} />, document.getElementById('backdrop-root'))}
      {/* {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))} */}
    </React.Fragment>
  )
}

export default Alert;