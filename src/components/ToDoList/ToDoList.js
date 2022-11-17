import React, {useEffect, useState} from "react";
import * as uuid from "uuid";
import s from './ToDoList.module.css';
import TodoFilter from "../TodoFilter/todoFilter";
import SaveTodo from "../SaveTodo/SaveTodo";
import Sub from "../SubTodo/SubTodo";
import Btn from "../BTN/BTN";
import SevSubTodo from "../SaveSubTodo/SevSubTodo";


// import {SubTodo} from "../SubTodo/SubTodo";

export default function ToDoList({todo, setToDo}) {
    let Todo = todo;
    let setTodo = setToDo;
    //
    const [edit, setEdit] = useState(null)
    //
    const [value, setValue] = useState('')
    //
    const [editSubTask, setEditSubTask] = useState(null);
    //
    const [subTodo, setSubToDo] = useState([])
//
    const [filtered, setFiltered] = useState(todo);
    //

    useEffect(() => {
        setFiltered(todo)
    }, [todo])


    const todoFilter = (status) => {
        if (status === 'all') {
            setFiltered(todo)
        } else {
            const newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }
    ///
    const statusToDo = (id) => {
        const newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setToDo(newTodo);
    }
//

    return (
        <>
            {
                [...todo].length > 0 &&
            <TodoFilter todoFilter={todoFilter}></TodoFilter>
            }
            <div className={s.flexlist}>
                {
                    filtered.map(item => (
                        <div key={item.id}>
                            {
                                edit === item.id &&
                                <SaveTodo  id={item.id} todo={Todo} setTodo={setTodo} setEdit={setEdit}  value={value} setValue={setValue}/>}
                            {
                                editSubTask === item.id &&
                              <SevSubTodo todo={Todo} setEditSubTask={setEditSubTask} id={item.id}  subTodo={subTodo} setSubToDo={setSubToDo} />
                            }
                            <div className={s.divtable}>

                                <Btn title={item.title} id={item.id}  todo={Todo} setTodo={setTodo}  setSubToDo={setSubToDo} setEdit={setEdit} setValue={setValue} setEditSubTask={setEditSubTask}/>

                                <div className={s.divcheck}>
                                    <input type={"checkbox"} className={s.check}
                                           onClick={() => statusToDo(item.id)}></input>
                                </div>
                                <p className={!item.status ? s.closet : ""}>{item.title}</p>
                            </div>
                                <>
                                {
                                    subTodo.map(items => (
                                        item.id === items.name &&
                                       <Sub title={items.title} id={items.id} status={items.status} subTodo={subTodo}  setSubToDo={setSubToDo}/>
                                    ))
                                }
                                </>


                        </div>))
                }
            </div>
        </>
    )
}






