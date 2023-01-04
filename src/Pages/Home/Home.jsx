import React from 'react'
import styled from 'styled-components'
import PokemonGrid from '../../Components/PokemonGrid/PokemonGrid'

const Home = () => {
  return (
    <HomeSection className={`mainContainer`}>
      <PokemonGrid/>
    </HomeSection>
  )
}

export default Home


// =============== Styles ===============

const HomeSection = styled.section`
  height: fit-content;
`;