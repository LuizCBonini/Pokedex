import React, { useEffect, useState } from 'react'
import { GET_SPECIE, GET_POKEMON } from '../../Pokeapi'

import styled from 'styled-components'

import electric from '../../Assets/Imgs/Electric.png'
import bug from '../../Assets/Imgs/Bug.png'
import dark from '../../Assets/Imgs/Dark.png'
import dragon from '../../Assets/Imgs/Dragon.png'
import fairy from '../../Assets/Imgs/Fairy.png'
import fighting from '../../Assets/Imgs/Fighting.png'
import fire from '../../Assets/Imgs/Fire.png'
import flying from '../../Assets/Imgs/Flying.png'
import ghost from '../../Assets/Imgs/Ghost.png'
import grass from '../../Assets/Imgs/Grass.png'
import ground from '../../Assets/Imgs/Ground.png'
import ice from '../../Assets/Imgs/Ice.png'
import steel from '../../Assets/Imgs/Iron.png'
import normal from '../../Assets/Imgs/Normal.png'
import poison from '../../Assets/Imgs/Poison.png'
import psychic from '../../Assets/Imgs/Psychic.png'
import rock from '../../Assets/Imgs/Rock.png'
import water from '../../Assets/Imgs/Water.png'


const Card = (props) => {

  const [pokemonImg, setPokemonImg] = useState()
  const [pokemonSprite, setPokemonSprite] = useState()
  const [pokemonColor, setPokemonColor] = useState()
  const [pokemonType, setPokemonType] = useState()
  const [secondType, setSecondType] = useState()
  const [pokemonName, setPokemonName] = useState()
  const [pokeStyleName, setPokeStyleName] = useState()
  const [pokeNumber, setPokeNumber] = useState()
  console.log(pokeNumber)
  const [genera, setGenera] = useState()
  const pokeName = props.pokemonName

  
  

  useEffect(() => {
    async function pokemon() {
      try {
        const response = await GET_POKEMON(pokeName)
        console.log(response)
        setPokemonImg(
          (response.sprites.other['official-artwork'].front_default) 
          ? response.sprites.other['official-artwork'].front_default
          : response.sprites.front_default
        )
        setPokemonSprite(response.sprites.front_default)
        setPokemonType(response.types[0].type.name);
        setSecondType(response.types[1]?.type.name);
        setPokemonName(response.species.name)
        setPokeStyleName((response.name !== response.species.name) ? response.name : '')
      } catch (err) {
        console.log('Ooops, ' + err)
      }
    }
    
    pokemon()
    
    
  }, [pokeName])

  useEffect(() => {

    async function specie() {
      try {
        const response = await GET_SPECIE(pokemonName)
        console.log(response)
        setPokeNumber(response.pokedex_numbers[0].entry_number)
        setPokemonColor(response?.color.name)
        setGenera(response.genera[7] ? response.genera[7].genus : response.genera[4].genus)
      } catch (err) {
        console.log('Oops, ' + err)
      }
    }
    specie()
  }, [pokemonName])

  const type = 
  pokemonType === 'bug' ? bug : 
  pokemonType === 'electric' ? electric : 
  pokemonType === 'dark' ? dark : 
  pokemonType === 'dragon' ? dragon : 
  pokemonType === 'fairy' ? fairy : 
  pokemonType === 'fighting' ? fighting : 
  pokemonType === 'fire' ? fire : 
  pokemonType === 'flying' ? flying : 
  pokemonType === 'ghost' ? ghost : 
  pokemonType === 'grass' ? grass : 
  pokemonType === 'ground' ? ground : 
  pokemonType === 'ice' ? ice : 
  pokemonType === 'steel' ? steel : 
  pokemonType === 'normal' ? normal : 
  pokemonType === 'poison' ? poison : 
  pokemonType === 'rock' ? rock : 
  pokemonType === 'psychic' ? psychic : 
  pokemonType === 'water' ? water : 
  null
  
  return (
    <CardContainer color={pokemonColor === 'white' ? 'red' : pokemonColor}>
      <PokeImg src={pokemonImg} alt="" />
      <Separador color={pokemonType}>
        <TypeIcon color={pokemonType}>
          
          <img src={type} alt="" />
          
        </TypeIcon>
      </Separador>
      <CardContent color={pokemonType}>
        <h1>{pokemonName}</h1>
        <PokeGenera color={pokemonType}>{genera}</PokeGenera>
        <StyleName>{pokeStyleName}</StyleName>
        <TypesDiv color={pokemonType}>
          <p>{pokemonType}</p>
          <img src={pokemonSprite} alt="" />
          <p>{secondType}</p>
        </TypesDiv>
        <PokeNumber color={pokemonType}>#{pokeNumber}</PokeNumber>
      </CardContent>
    </CardContainer>
  )
}

export default Card

// ============= Styles =============

const color = props => 
  props.color === 'electric' 
  ? '#F3D23B' 
  : props.color === 'fire'
  ? '#FF9C54'
  : props.color === 'water'
  ? '#4D90D5'
  : props.color === 'bug'
  ? '#90C12C'
  : props.color === 'dark'
  ? '#5A5366'
  : props.color === 'dragon'
  ? '#096DC4'
  : props.color === 'fairy'
  ? '#ED94E7'
  : props.color === 'fighting'
  ? '#CE4069'
  : props.color === 'normal'
  ? '#9099A1'
  : props.color === 'flying'
  ? '#92AADE'
  : props.color === 'ghost'
  ? '#5269AC'
  : props.color === 'grass'
  ? '#63BB5B'
  : props.color === 'ground'
  ? '#D97746'
  : props.color === 'ice'
  ? '#74CEC0'
  : props.color === 'steel'
  ? '#5A8EA1'
  : props.color === 'poison'
  ? '#AB6AC8'
  : props.color === 'psychic'
  ? '#F97176'
  : props.color === 'rock'
  ? '#C7B78B'
  : null
  
const CardContainer = styled.div`
  background: linear-gradient(#fff, ${props => props.color});
  height: 30rem;
  width: 20rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  border: 1px solid #333;
  border-bottom: 0px;
  cursor: pointer;

  :hover {
    > img {
      transform: scale(1.2);
      /* top: -60px; */
      transition: .2s;
    }
  }
`;

const PokeImg = styled.img`
  width: 20rem;
  position: absolute;
  top: -40px;
  z-index: 3;
  transition: .2s;
`;

const Separador = styled.div`
  background-color: ${color};
  height: .5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const TypeIcon = styled.div`
  background-color: ${color};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  img {
    width: 3rem;
  }
`;

const CardContent = styled.div`
  background-color: #fff;
  height: 15rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #333;

  h1 {
    margin-top: .7rem;
    color: #333;
    font-family: var(--font-primal);
    text-transform: capitalize;
    font-size: 3rem;
  }
`;

 const PokeGenera = styled.p`
  color: ${color};
  font-size: 1.2rem;
  letter-spacing: .3rem;
  font-weight: 600;
 `;
 
  const StyleName = styled.p`
    text-transform: capitalize;
    font-size: 1rem;
    color: #333;
  `;

const TypesDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${color};
  height: 2rem;
  padding: 0 .5rem 0 .5rem;
  border-radius: 2rem;
  margin-top: 2rem;
  
  img {
    width: 6rem;
  }
  
  p {
    color: #fff;
    text-transform: capitalize;
  }
`;

const PokeNumber = styled.p`
  margin-top: 1rem;
  margin-left: 15rem;
  font-size: 1rem;
  color: ${color}
`;
