import styled from 'styled-components'
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
        <LoginForm onSubmit={handleSubmit}>
            <LogoPokedex src={Logo} alt="Pokédex logo"/>
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
            <ButtonsContainer>
              <Button isDisabled={disabled}>Sign Up</Button>
              <Link to={'/login'} className={'linkLogin'}>Go to Login</Link>
            </ButtonsContainer>
        </LoginForm>
      </section>
    </>
  )
}

export default Login

// ============== styled ===============

const LoginForm = styled.form`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LogoPokedex = styled.img`
  width: fit-content;
`;

const ButtonsContainer = styled.div`
  display: inline;
  .linkLogin {
    color: #fff;
    text-decoration: none;
  }
`;