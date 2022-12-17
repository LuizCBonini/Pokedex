import React from 'react'

// images
import Logo from '../../Assets/Imgs/Pokédexlogo.png'

// styles
import styles from './Login.module.css'

const Login = () => {
  return (
    <section className={styles.Login}>
        <img src={Logo} alt="" />
        <input type="text" placeholder='Ash Ketchum' />
        <label htmlFor="senha">Senha</label>
        <input type="password" id='senha' name='senha'/>
        <button disabled>botao</button>
    </section>
  )
}

export default Login