import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PokemonGrid from '../../Components/PokemonGrid/PokemonGrid'
import Input from '../../Components/Form/Input/Input'

// imgs:
import searchIcon from '../../Assets/Imgs/Search.svg'
import Card from '../../Components/Card/Card'
import useDebounce from '../../Hooks/useDebouce'

const Home = () => {
  const [search, setSearch] = useState('')
  const [searchDebouced, setSearchDebounced] = useState()
  const deboucedChange = useDebounce(setSearchDebounced, 500)

  function handleChange(event) {
    const filterSearch = event.target.value.toLowerCase()
    setSearch(event.target.value)
    deboucedChange(filterSearch)
  }
  return (
    <>
      <HomeSection className={`mainContainer`}>
        <SearchContent>
          <Input
            id='searchPoke'
            label=''
            type={'text'}
            placeholder=''
            icon={searchIcon}
            value={search}
            onChange={handleChange}
            search
          />
        </SearchContent>
        {searchDebouced ? <Card pokemonName={searchDebouced}/> : <PokemonGrid/>}
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
  margin-bottom: 5rem;
`;