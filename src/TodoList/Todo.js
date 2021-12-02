// eslint-disable-next-line
import React, { useState } from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import './NewTodoForm';
import './TodoList';
import './TodoList.css';
import FormEdit from './FormEdit';

function Todo({ tasks, remove, updateTodo, checkbox }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    function submitUpdate(id, value) {

        updateTodo(id, value)

        setEdit({
            id: null,
            value: value
        })
       
    }


    return (
        <>
            {tasks && tasks.map((items) => {

                // console.log({items})
                return (
                    <>
                        <div className='task' key={items.id}>
                            <input className='check' checked={items.complete === true ? 'checked' : '' } type="checkbox" onClick={() => checkbox(items.id)} />
                            <div className={`taskText ${items.complete ? 'riskMark' : ''}`}>
                                {edit.id === items.id ? <FormEdit title={items.title} submitUpdate={submitUpdate} edit={edit}/> : items.title}
                            </div>
                            { items.complete === true ? '' : 
                            <button className='edit' type='submit' onClick={() => setEdit({ id: items.id, value: items.title })}>
                                <FiEdit size={22} />
                            </button>
                            }
                            <button className='delet' type='submit' onClick={() => remove(items.id)}>
                                <RiDeleteBin6Line size={22} />
                            </button>
                        </div>

                    </>
                )
            })}
        </>
    )
}

export default Todo;

// { edit.id === items.id ? 
//     <FormEdit edit={edit.id} title={items.title} handleSubmit={(e) => {
//         e.preventDefault();
//         // console.log({value})
//         const value = new FormData(e.target);

//         console.log(value.get())
//         console.log(value)

//         // console.log({value})
//         setEdit({ id : items.id, value : value })
//     }
//     } />
// : items.title
// }