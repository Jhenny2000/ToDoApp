import React from "react";
import './Box.css'
import { NewBoxForm } from './NewBoxForm'

function Box(){

    // const [itemsList, setItemsList] = useState([]);

    // function delet(id){
    //     const deletItem = itemsList.filter((item) => {
    //         return item.id !== id
    //     })
    //     setItemsList(deletItem)
    // }

    return(
        <>
        <NewBoxForm/>
             {/* <div className='container-new'>
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
             </div> */}
        </>
    )
}

export default Box;