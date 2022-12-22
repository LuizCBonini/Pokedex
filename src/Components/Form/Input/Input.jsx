import React from 'react'

// style
import styles from './Input.module.css'


const Input = ({ id, label, type, placeholder, icon, value, onChange }) => {
  return (
    <>
        <label htmlFor={id} className={styles.inputLabel}>{label}</label>
        {/*<span className={styles.icon}></span>*/}
        <span className={styles.span}>
            <img src={icon} alt="" className={styles.icon}/>
            <input 
              type={type} 
              placeholder={placeholder} 
              id={id} 
              className={styles.inputInput}
              value={value}
              onChange={onChange}
            />
        </span>
    </>
  )
}

export default Input