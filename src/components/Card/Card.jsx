"use client"
import React from "react";
import Button from "../Button/Button";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import SingleTodoCard from "../SingleTodoCard/SingleTodoCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todosCleared } from "../../store/features/todo/todoSlice";
import UpdateTodoForm from "../UpdateTodoForm/UpdateTodoForm";

const Card = () => {

const mytodo = useSelector((state) => state.todos.todos)
console.log(mytodo)

const dispatch = useDispatch('');
const toggleForm = useSelector((state) => state.todos.toggleForm)

    return(
        <div className="Card w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2x1 rounded-lg p-2 items-center flex flex-col space-y-10 justify-between">
        <h2>my todo list</h2>
        {toggleForm ? <AddTodoForm /> : <UpdateTodoForm />}
        
        <div className="w-3/4">
        <ul>
        {mytodo.map((todo) => {
            return(
                <li className="mb-3" key={todo.id}><SingleTodoCard id={todo.id} title={todo.name}/></li>
            )
        })}
        </ul>
        
        </div>
        <Button handleClick={() => dispatch(todosCleared())} btnTitle={'Clear'} type={'primary'}/>
        </div>
    )
}
export default Card;