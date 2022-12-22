import React, { useState } from 'react'

// images
import Logo from '../../../Assets/Imgs/Pokédexlogo.png'
import User from '../../../Assets/Imgs/User.svg'
import Password from '../../../Assets/Imgs/password.svg'

// components
import Input from '../../../Components/Form/Input/Input'
import Button from '../../../Components/Form/Button/Button'

// styles
import styles from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  return (
    <section >
        <form className={styles.Login}>
          <img src={Logo} alt="" className={styles.logo}/>
          <Input
              id='nome'
              label='Nome:'
              type='text'
              placeholder=''
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              icon={User}
          />
          <Input
              id='senha'
              label='Senha:'
              type='password'
              placeholder=''
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              icon={Password}
          />
          <div className={styles.buttons}>
            <Button isDisabled={(!!nome && !!senha) ? false : true}>Login</Button>
            <Link to={'registrar'} className={styles.link}><Button>Cadastre-se</Button></Link>
          </div>
        </form>
    </section>
  )
}

export default Login