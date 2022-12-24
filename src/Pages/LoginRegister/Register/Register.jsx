import React, { useState } from 'react'

// images
import Logo from '../../../Assets/Imgs/Pokédexlogo.png'
import User from '../../../Assets/Imgs/User.svg'
import Email from '../../../Assets/Imgs/email.svg'
import Password from '../../../Assets/Imgs/password.svg'

// components
import Input from '../../../Components/Form/Input/Input'
import Button from '../../../Components/Form/Button/Button'

// styles
import styles from '../Login/Login.module.css'
import { Link } from 'react-router-dom'
import { CREATE_USER } from '../../../api'

const Login = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setError] = useState('')


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await CREATE_USER({
        nome: nome,
        email: email,
        password: senha
      })

      if(!response.length > 0) {
        window.localStorage.setItem('token', response.accessToken)
        window.localStorage.setItem('nome', response.user.nome)
      } else {
        setError(response)
      }

    } catch(err) {
      console.log('Ooops, ' + err)
    }
  }

  return (
    <section>
          {erro && <div className="error" role={'alert'}>{erro}</div>}
      <form className={styles.Login} onSubmit={handleSubmit}>
          <img src={Logo} alt="" className={styles.logo}/>
          <Input
              id='nome'
              label='Nome:'
              type='text'
              placeholder=''
              value={nome}
              onChange={(event) => {
                setNome(event.target.value)
                setError(null)
              }}
              icon={User}
          />
          <Input
              id='email'
              label='E-mail:'
              type='email'
              placeholder=''
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError(null)
              }}
              icon={Email}
          />
          <Input
              id='senha'
              label='Senha:'
              type='password'
              placeholder=''
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value)
                setError(null)
              }}
              icon={Password}
          />
          <div className={styles.button}>
            <Button isDisabled={(!!nome && !!email && !!senha) ? false : true}>Cadastrar</Button>
            <Link to={'/login'}><Button>Faça Login</Button></Link>
          </div>
      </form>
    </section>
  )
}

export default Login