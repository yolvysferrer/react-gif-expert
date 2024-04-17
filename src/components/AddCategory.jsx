import { useState } from "react"
import PropTypes from 'prop-types'
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if(value.length <= 1) return;
        onNewCategory(value)
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input 
            type="text"
            placeholder="Buscar gifs" 
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}