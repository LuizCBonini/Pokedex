import React from 'react'
import loadingImg from '../../Assets/Imgs/Pokeball.png'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <section className={styles.loadingSection}>
        <img src={loadingImg} alt="pokéball branca rodando" className={styles.loading}/>
        <h1>Loading...</h1>
    </section>
  )
}

export default Loading