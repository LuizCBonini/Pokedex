import React from 'react'
import Card from '../../Components/Card/Card'

import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={`mainContainer ${styles.section}`}>
      <Card/>
    </section>
  )
}

export default Home