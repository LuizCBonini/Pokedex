import React, { useState } from 'react'
import styled from 'styled-components'
import PokemonGrid from '../../Components/PokemonGrid/PokemonGrid'
import Input from '../../Components/Form/Input/Input'

// imgs:
import searchIcon from '../../Assets/Imgs/Search.svg'

const Home = () => {
  const [search, setSearch] = useState()
  return (
    <>
        <SearchContent>
          <Input
            id='searchPoke'
            label=''
            type={'text'}
            placeholder=''
            icon={searchIcon}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchContent>
      <HomeSection className={`mainContainer`}>
        <PokemonGrid/>
      </HomeSection>
    </>
  )
}

export default Home


// =============== Styles ===============

const HomeSection = styled.section`
  height: fit-content;
`;

const SearchContent = styled.div`
  max-width: fit-content;
  display: flex;
  margin: 0 auto;
  margin-top: 10rem;
`;