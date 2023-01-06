import React from 'react'
import styled from 'styled-components'


const Input = ({ id, label, type, placeholder, icon, value, onChange, onBlur, error, ...props }) => {
  return (
    <>
        <LabelInput htmlFor={id}>{label}</LabelInput>
        {/*<span className={styles.icon}></span>*/}
        <InputContainer>
            <Icon src={icon} alt=""/>
            <InputContent 
              type={type} 
              placeholder={placeholder} 
              id={id}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...props}
              />
        </InputContainer>
        {error && <Error>{error}</Error>}
    </>
  )
}

export default Input








// ================= styled ===================

const LabelInput = styled.label`
    font-size: 2rem;
    display: block;
    margin-top: 3rem;
`;

const InputContent = styled.input`
    background-color: ${props => props.search ? '#ff4040' : 'rgb(32, 32, 32)'};
    color: #fff;
    border: ${props => props.search ? '2px solid rgb(32, 32, 32)' : 'none' };
    height: 3rem;
    border-radius: .5rem;
    padding: 0 0 0 4rem;
`;

const InputContainer = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Icon = styled.img`
    display: inline;
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 1rem;
`;
const Error = styled.div`
    color: red;
    display: inline;
`;