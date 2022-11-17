import React, {useEffect, useState} from 'react';
import s from "../ToDoList/ToDoList.module.css";

function TodoFilter({todoFilter}) {


    return (
        <div>
            <div className={s.divBtn}>
            <button className={s.buttonlist} onClick={()=>todoFilter('all')}>Все</button>
            <button className={s.buttonlist} onClick={()=>todoFilter(true)}>Открытые</button>
            <button className={s.buttonlist} onClick={()=>todoFilter(false)}>Закрытые</button>
        </div>
        </div>
    );
}

export default TodoFilter;
