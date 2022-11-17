import React, {useState} from "react";
import * as uuid from "uuid";

import './AddRoDo.css'

export const AddToDo = ({setToDo, todo}) =>{
    const [value, setValue] = useState('')

    const saveToDo = ()=>{
        let id = todo.length + 1;
        if(value)
            setToDo(
                [...todo,
                    {
                        id: id,
                        title:value,
                        status: true,

                    }

                ]
            )
        setValue('')

    }
    return(
        <div className="block-input">
          <input className='input-add' placeholder='Введите задание' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button className='Button-add' onClick={saveToDo}>Сохранить </button>
        </div>
    )
}
