import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { POKE_PAGINATION } from '../../Pokeapi'
import Card from '../Card/Card';

import Loading from '../../Components/Loading/Loading'

// Imgs: 
import setaDireita from '../../Assets/Imgs/setadireita.svg'
import setaEsquerda from '../../Assets/Imgs/setaesquerda.svg'

const PokemonGrid = () => {

    const [pokeList, setPokeList] = useState();
    const [loading, setLoading] = useState(false);
    const [offSet, setOffSet] = useState(1140);

    
    useEffect(() => {
        setLoading(true)
        async function pagination() {
            try {
                const response = await POKE_PAGINATION(8, offSet)
                setPokeList(response.results)
                console.log(response)
            } catch (err) {
                console.log('Ooop, ' + err)
            } finally {
                setLoading(false)
            }
        }
        pagination()
    }, [offSet])

  return (
    <>
        {loading && <Loading/>}
        <PokeGrid>
            <SetaEsquerda onClick={() => setOffSet((offSet === 0) ? 0 : offSet-8)} src={setaEsquerda} alt="" />
            {
                pokeList?.map((poke) => <Card key={poke.name} pokemonName={poke.name}/>)
            }
            <SetaDireita src={setaDireita} onClick={() => setOffSet((offSet < 1148 ) ? offSet+8 : 1148)} alt="" />
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
    align-items: center;
    position: relative;
`;

const SetaDireita = styled.img `
    position: absolute;
    width: 10rem;
    right: -8rem;
    transition: .2s;
    cursor: pointer;

    :hover {
        transform: scale(1.2);
        transition: .2s;
    }
`;
const SetaEsquerda = styled.img `
    position: absolute;
    width: 10rem;
    left: -8rem;
    transition: .2s;
    cursor: pointer;

    :hover {
        transform: scale(1.2);
        transition: .2s;
    }
`;