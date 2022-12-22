import React from 'react'

// styles
import styles from './Button.module.css'

const Button = ({ children, isDisabled }) => {
  return (
    <button disabled={isDisabled} className={styles.button}>{children}</button>
  )
}

export default Button