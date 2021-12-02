import React, { useState } from "react";
import './TodoList.css';
import NewTodoForm from "./NewTodoForm";
import Todo from './Todo';

function TodoList() {

    const [itemsList, setItemsList] = useState(getItem);

    localStorage.setItem('listKey', JSON.stringify(itemsList))

    function getItem() {
        const storedItems = JSON.parse(localStorage.getItem('listKey'))
        if (storedItems) {
            return JSON.parse(localStorage.getItem('listKey'))
        } else {
            return []
        }
    }


    function addTodoList(todo) {

        if (todo && (!todo.title || /^\s*$/.test(todo.title))) {
            return;
        }

        setItemsList([...itemsList, todo])

    }

    function removeTodo(id) {
        // console.log(id)
        const deletTodo = itemsList.filter((item) => {
            return item.id !== id
        })
        setItemsList(deletTodo)
    }

    function updateTodo(todoId, newValue) {
        
        console.log(todoId, newValue)
        // Funcionando mesmo sem essa função
        // Existe um bug na div q cria a task pois se o texto for grande ele sai da div
        // 'estourando a div'.
        /* if (newValue && (!newValue.title || /^\s*$/.test(newValue.title))) {
            return;
        } */
        // console.log({todoId})
        // console.log({newValue})

        const newItemList = itemsList.map(item => (item.id === todoId ? {...item, title: newValue} : item))

        setItemsList(newItemList)

    }

    function checkbox(id) {
        const updateTodos = itemsList.map(task => {
            if (task.id === id) {
                task.complete = !task.complete
            }
            return task
            
        })
        setItemsList(updateTodos)
    }

    return (
        <>
            <h1>To do list</h1>

            <NewTodoForm onSubmit={addTodoList} />
            <div className='container-tasks'>
                <Todo tasks={itemsList} remove={removeTodo} updateTodo={updateTodo} checkbox={checkbox} />
            </div>
        </>
    )
}

export default TodoList;