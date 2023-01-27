import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    // const onInputChange = (event) =>{
    //     setinputValue(event.target.value)
    // }
    //Desestructurado
    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories])
        setinputValue('');
        onNewCategory(inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={ (event) => onInputChange(event) } estoy mandando event, se puede obviar
                onChange={onInputChange}
            />
        </form>
    )
}
