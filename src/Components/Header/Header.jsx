import React from 'react'
import { useNavigate } from 'react-router-dom'

import {ReactComponent as HeaderImg} from '../../Assets/Imgs/pokedexHeader.svg'
import User from '../../Assets/Imgs/User.svg'
import pokeicon from '../../Assets/Imgs/Pokeicon.svg'
import styles from './Header.module.css'

const Header = () => {

  const navigate = useNavigate()
  const nome = window.localStorage.getItem('nome')

  return (
    <div className={styles.header}>
        <HeaderImg className={styles.headerImg}/>
        <p className={styles.user}><img src={User} alt="" className={styles.userIcon}/>{nome}</p>
        <button className={styles.gotchas} onClick={() => navigate('/login')}>
          <img src={pokeicon} alt="Pokeball icon" className={styles.pokeicon}/>
        </button>
    </div>
  )
}

export default Header