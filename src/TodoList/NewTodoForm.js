import React, { useState } from "react";
import uuid from "react-uuid";
import './TodoList.css'
import './TodoList'
import { MdAdd } from 'react-icons/md'

function NewTodoForm({onSubmit, edit}){

    const [input, setInput] = useState( edit ? edit.value : '' );

    function handleOnChangeInput(e){
        const input = e.target.value;
        setInput(input)
    }

    function handleSubmit(e){
        e.preventDefault();

        onSubmit({
            id : uuid(),
            title : input,
            complete : false
        })

        setInput('')
    }

    return(
        <>
            <div className='container-input'>
                <form onSubmit={handleSubmit}>
                    <button className='add' type='submit'>
                        <MdAdd/>
                    </button>
                    <input type='text' placeholder='Add a task' onChange={handleOnChangeInput} value={input}/>
                </form>
            </div>
        </>
    )
}

export default NewTodoForm;
// onChange={(e) => setTask(e.target.value)}


// { edit ? 
//     <div className='container-input'>
//         <form onSubmit={handleSubmit}>
//             <button className='add' type='submit'>
//                 <IoIosSave/>
//             </button>
//             <input type='text' placeholder='Update task' onChange={handleOnChangeInput} value={input}/>
//         </form>
//     </div>
//     :
//     <div className='container-input'>
//         <form onSubmit={handleSubmit}>
//             <button className='add' type='submit'>
//                 <MdAdd/>
//             </button>
//             <input type='text' placeholder='Add a task' onChange={handleOnChangeInput} value={input}/>
//         </form>
//     </div>
// }