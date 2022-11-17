import React, {useState} from 'react';
import s from "../ToDoList/ToDoList.module.css";

function Btn({id, title, todo, setTodo, setValue, setEdit, setEditSubTask}) {

    //
    const deleteToDo = (id) => {
        const newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    const editSubTodo = (id) => {
        setEditSubTask(id)
    }


//
    const editToDO = (id, title) => {
        setEdit(id)
        setValue(title)
    }


    return (
        <div>
            <div>
                <nav className={s.main}>
                    <ul className={s.menuList}>
                        <li>
                            <button className={s.addbutton}>...</button>
                        </li>
                        <ul className={s.subMenuList}>
                            <li>
                                <button className={s.buttonlist}
                                        onClick={() => editToDO(id, title)}>редактировать
                                </button>
                            </li>
                            <li>
                                <button className={s.buttonlist}
                                        onClick={() => deleteToDo(id)}>Удалить
                                </button>
                            </li>
                            <li>
                                <button className={s.buttonlist}
                                        onClick={() => editSubTodo(id)}>Добавить подзадачу
                                </button>
                            </li>
                        </ul>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Btn;
