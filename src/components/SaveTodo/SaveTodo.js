import React, {useState} from 'react';
import s from "../ToDoList/ToDoList.module.css";

function SaveTodo({id, todo, setTodo, setEdit, value, setValue}) {


    const saveToDo = (id) => {
        const newTodo = [...todo].map(item => {
            if (value)
                if (item.id === id) {
                    item.title = value;
                }
            return item
        })

        setTodo(newTodo)
        setEdit(null)
    }


    return (
        <div  className={s.blockEditing}>
            <div className={s.editingBtn} >
                <button className={s.buttonlist} onClick={()=>saveToDo(id)}>Сохранить</button>
            </div>
            <div>
                <input className={s.inputlist} onChange={(e)=>setValue(e.target.value)} value={value} />
            </div>
        </div>
    );
}

export default SaveTodo;
