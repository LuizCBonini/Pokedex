import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

// images
import Logo from '../../../Assets/Imgs/Pokédexlogo.png'
import User from '../../../Assets/Imgs/User.svg'
import Email from '../../../Assets/Imgs/email.svg'
import Password from '../../../Assets/Imgs/password.svg'

// components
import Input from '../../../Components/Form/Input/Input'
import Button from '../../../Components/Form/Button/Button'
import Loading from '../../../Components/Loading/Loading'
import { CREATE_USER } from '../../../api'

// Hooks
import useForm from '../../../Hooks/useForm'

// styles
import styles from '../Login/Login.module.css'
import style from './Register.module.css'

const Login = () => {
  const [erro, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const validateName = useForm('name')
  const validateEmail = useForm('email')
  const validatePassword = useForm('senha')

  const navigate = useNavigate()

  useEffect(() => {
    if(
      validateEmail.value && validatePassword.value &&
      !validateEmail.error && !validatePassword.error) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [validateEmail, validatePassword])

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await CREATE_USER({
        nome: validateName.value,
        email: validateEmail.value,
        password: validatePassword.value
      })

      if(!response.length > 0) {
        window.localStorage.setItem('token', response.accessToken)
        window.localStorage.setItem('nome', response.user.nome)
        navigate('/')
      } else {
        setError(response)
      }
    } catch(err) {
      console.log('Ooops, ' + err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading && <Loading/>}
      <section>
            {erro && <div className="error" role={'alert'}>{erro}</div>}
        <form className={styles.Login} onSubmit={handleSubmit}>
            <img src={Logo} alt="" className={styles.logo}/>
            <Input
                id='nome'
                label='Name:'
                type='text'
                placeholder=''
                icon={User}
                {...validateName}
            />
            <Input
                id='email'
                label='E-mail:'
                type='email'
                placeholder=''
                icon={Email}
                {...validateEmail}
            />
            <Input
                id='senha'
                label='Senha:'
                type='password'
                placeholder=''
                icon={Password}
                {...validatePassword}
            />
            <div className={styles.button}>
              <Button isDisabled={disabled}>Sign Up</Button>
              <Link to={'/login'} className={style.linkLogin}>Go to Login</Link>
            </div>
        </form>
      </section>
    </>
  )
}

export default Login