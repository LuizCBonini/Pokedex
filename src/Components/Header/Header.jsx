import React from 'react'
import { useNavigate } from 'react-router-dom'

import {ReactComponent as HeaderImg} from '../../Assets/Imgs/pokedexHeader.svg'
import pokeicon from '../../Assets/Imgs/Pokeicon.svg'
import styles from './Header.module.css'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.header}>
        <button className={styles.gotchas} onClick={() => navigate('/login')}>
          <img src={pokeicon} alt="Pokeball icon" className={styles.pokeicon}/>
        </button>
        <HeaderImg className={styles.headerImg}/>
    </div>
  )
}

export default Header