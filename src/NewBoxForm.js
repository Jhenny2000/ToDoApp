import React, { useState } from "react";
import uuid from 'react-uuid'

export function NewBoxForm(){

    const [task, setTask] = useState('');
    const [itemsList, setItemsList] = useState([]);
    

function changeInput(event){
    const inputTask = event.target.value
    
    setTask({ id : uuid(), title : inputTask });  
    
}

function addItemToList(){

    if(task){
        setTask('')
        setItemsList([...itemsList, task])

    }   
}


function delet(id){
    const deletItem = itemsList.filter((item) => {
        return item.id !== id
    })
    setItemsList(deletItem)
}


    return(
        <>
            <div className='container'>
                <div className='newtask'>
                    <input type='text' placeholder='Task to be done...'  onChange={changeInput} value={task?.title}/>
                    <button id='push' type='submit' onClick={addItemToList}>Add</button>
                </div>
                {
                    itemsList.map((task) =>{
                        return  <>
                                    <div className='tasks' key={`task-${task.id}`}>
                                        {task.title}
                                        {console.log(task.title)}
                                        <button type='submit' className='delet' onClick={() =>delet(task.id)}> X </button>
                                    </div>
                                </>
                    })
                }
            </div>
        </>
    )
}

export default NewBoxForm;

// {
//     listTaskTest.map((task) =>{
//         return  <>
//                     <div className='tasks' key={`task-${task.id}`}>{task.title}
//                         <button type='submit' className='delet' onClick={() =>delet(task.id)}> X </button>
//                     </div>
//                 </>
//     })
// }

// const listTaskTest = [

    //     { 
    //         id : 1, 
    //         title : 'Tarefa 1'
    //     },
    //     { 
    //         id : 2, 
    //         title : 'Tarefa 2'
    //     },
    //     { 
    //         id : 3, 
    //         title : 'Tarefa 3'
    //     },
    //     { 
    //         id : 4, 
    //         title : 'Tarefa 4'
    //     },
    //     { 
    //         id : 5, 
    //         title : 'Tarefa 5'
    //     }
    // ]