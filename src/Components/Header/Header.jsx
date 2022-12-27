import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {ReactComponent as HeaderImg} from '../../Assets/Imgs/pokedexHeader.svg'
import User from '../../Assets/Imgs/User.svg'
import pokeicon from '../../Assets/Imgs/Pokeicon.svg'
import styles from './Header.module.css'

const Header = () => {

  const [showHeader, setShowHeader] = useState(false)
  const navigate = useNavigate()
  const nome = window.localStorage.getItem('nome')
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/login') {
      setShowHeader(true)
    }
  }, [location])



  return (
    <div className={`${styles.header} ${showHeader && styles.display}`}>
        <HeaderImg className={styles.headerImg}/>
        <p className={styles.user}><img src={User} alt="" className={styles.userIcon}/>{nome}</p>
        <button className={styles.gotchas} onClick={() => navigate('/login')}>
          <img src={pokeicon} alt="Pokeball icon" className={styles.pokeicon}/>
        </button>
    </div>
  )
}

export default Header