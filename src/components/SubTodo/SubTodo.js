import React, {useState} from "react";
import s from "../ToDoList/ToDoList.module.css";
import SaveTodo from "../SaveTodo/SaveTodo";

export default function Sub({id, title, status, setSubToDo, subTodo}){
    let sudTodo = subTodo;
    let setSubTodo = setSubToDo
    //
    const [edit, setEdit] = useState(null)
    //
    const [value, setValue] = useState('')

    //
    const deleteToDo = (id) => {
        const newTodo = [...subTodo].filter(item => item.id !== id)
        setSubToDo(newTodo)
    }


//
    const statusToDo = (id) => {
        const newTodo = [...subTodo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setSubToDo(newTodo);
    }

//
    const editToDO = (id, title) => {
        setEdit(id)
        setValue(title)
    }



    return (
        <div key={id}>
            {
                edit === id &&
                <SaveTodo id={id} todo={sudTodo} setTodo={setSubTodo} setEdit={setEdit}  value={value} setValue={setValue}/>}
            <div className={s.div__sub}>
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
                                </ul>

                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={s.divcheck}>
                    <input type={"checkbox"} className={s.check}
                           onClick={() => statusToDo(id)}></input>
                </div>
                <p className={!status ? s.closet : ""}>{title}</p>
            </div>
        </div>

    );
}
