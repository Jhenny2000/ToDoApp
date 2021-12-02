import React, { useState } from "react";
import './TodoList.css';
import { FiSave } from 'react-icons/fi'

const FormEdit = ({title, submitUpdate, edit }) => {

    const [input, setInput] = useState(title);

    function handleSubmit(e) {
        e.preventDefault()
        setInput(e.target.value)
    }

    console.log(edit)
    return (<>
        <input className='taskTodo' type='text' value={input} onChange={handleSubmit} placeholder='Update task...' />
        <br/>
        <button className='save' type='submit' onClick={() => { submitUpdate(edit?.id, input) }}>
            <FiSave size={24}/>
        </button>
    </>)
}

export default FormEdit;