import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { POKE_PAGINATION } from '../../Pokeapi'
import Card from '../Card/Card';

import Loading from '../../Components/Loading/Loading'

const PokemonGrid = () => {

    const [pokeList, setPokeList] = useState();
    const [loading, setLoading] = useState(false);
    console.log(pokeList)

    useEffect(() => {
        setLoading(true)
        async function pagination() {
            try {
                const response = await POKE_PAGINATION(12, 0)
                setPokeList(response.results)
            } catch (err) {
                console.log('Ooop, ' + err)
            } finally {
                setLoading(false)
            }
        }
        pagination()
    }, [])

  return (
    <>
        <PokeGrid>
            {loading && <Loading/>}
            {
                pokeList?.map((poke) => <Card key={poke.name} pokemonName={poke.name}/>)
            }
        </PokeGrid>
    </>
  )
}

export default PokemonGrid





// ================ styles =============


const PokeGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 4rem;
    justify-items: center;
`;