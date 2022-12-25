import React, { useEffect, useState } from 'react'

// images
import Logo from '../../../Assets/Imgs/Pokédexlogo.png'
import Email from '../../../Assets/Imgs/email.svg'
import Password from '../../../Assets/Imgs/password.svg'

// components
import Input from '../../../Components/Form/Input/Input'
import Button from '../../../Components/Form/Button/Button'
import Loading from '../../../Components/Loading/Loading'

// styles
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { GET_USER } from '../../../api'
import useForm from '../../../Hooks/useForm'

const Login = () => {
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  
  
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
    setLoading(true)
    try {
      const response = await GET_USER({
        email: validateEmail.value,
        password: validatePassword.value
      })

      if(!response.length > 0) {
        window.localStorage.setItem('token', response.accessToken)
        window.localStorage.setItem('nome', response.user.nome)
        navigate('/')
      } else {
        setErro(response)
      }
      
    } catch (err) {
      console.log('Ooops, ' + err)
    } finally {
      setLoading(false)
    }
  } 

  return (
    <>
      {loading && <Loading/>}
      <section className='section'>
        {erro && <div className="error" role={'alert'}>{erro}</div>}
          <form className={styles.Login} onSubmit={handleSubmit}>
            <img src={Logo} alt="" className={styles.logo}/>
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
                label='Password:'
                type='password'
                placeholder=''
                icon={Password}
                {...validatePassword}
            />
            <div className={styles.buttons}>
              <Button isDisabled={disabled}>Login</Button>
              <Link to={'registrar'} className={styles.link}><Button>Cadastre-se</Button></Link>
            </div>
            
          </form>
      </section>
    </>
    
  )
}

export default Login