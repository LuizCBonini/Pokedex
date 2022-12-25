import { useState } from 'react'

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ,
        message: 'Preencha um e-mail válido.',
    },
    senha: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#()])[0-9a-zA-Z$*&@#()]{8,}$/
        ,
        message: `A senha deve conter no mínimo 8 caracteres 1 letra maiúscula 1 número e 1 símbolo.`,
    },
    number: {
        regex: /^\d+$/
        ,
        message: `Apenas utilize números.`,
    },
    name: {
        regex: /^(?=.*[A-Za-z0-9]).{4,20}$/
        ,
        message: 'O nome deve conter de 4 a 20 caracteres.'
    }
}

const useForm = (type) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function validate(value) {
        if(type === false) return true
        if (value.length === 0) {
            setError('Preencha um valor')
            return false
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        setError(null)
        setValue(target.value)
    }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm;