import React, {useState} from 'react';
import s from "../ToDoList/ToDoList.module.css";
import * as uuid from "uuid";

function SevSubTodo({todo, setEditSubTask, id,setSubToDo,subTodo}) {
    const [subValue, setSubValue] = useState('')
    const saveSubToDo = (id) => {
        [...todo].map(item => {
            if (subValue)
                if (item.id === id)
                    setSubToDo(
                        [...subTodo,
                            {
                                id: uuid.v4(),
                                name: id,
                                title: subValue,
                                status: true,

                            }
                        ]
                    )
            setEditSubTask(null)
            setSubValue('')
        })


    }
    return (
        <div className={s.blockEditing}>
            <div className={s.editingBtn}>
                <button className={s.buttonlist}
                        onClick={() => saveSubToDo(id)}>Сохранить
                </button>
            </div>
            <div>
                <input className={s.inputlist} onChange={(e) => setSubValue(e.target.value)}
                       value={subValue}/>
            </div>
        </div>
    );
}

export default SevSubTodo;
