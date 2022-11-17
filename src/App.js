import './App.css'
import {Header} from "./components/Header/Header";
import {AddToDo} from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import {useState} from "react";


function App() {
    const [todo,setToDo]= useState([
    ])



    return (
    <div className="App">
     <Header/>
     <AddToDo setToDo={setToDo}  todo={todo}  />
     <ToDoList todo={todo} setToDo={setToDo}  />
    </div>
  );
}

export default App;
