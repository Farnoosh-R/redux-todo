"use client"
import React, { useState } from "react";
import Input from "../Input/Input";
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/Button";
import { todoAdded } from "../../store/features/todo/todoSlice";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {

    const [todoTitle, setTodoTitle] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setTodoTitle(e);
        console.log(todoTitle)
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        dispatch(
            todoAdded({
                id: uuidv4(),
                name: todoTitle,
            })
        )
    }
    
    return(
        <div className="AddTodoForm">
        <form onSubmit={handleSubmit} className="flex justify-center w-3/4">
        <Input handleChange={(e) => handleChange(e.target.value)} placeholder={'enter todo'}/>
        <Button btnTitle={'Add'} type={'secondary'}/>
        </form>
        </div>
    )
}
export default AddTodoForm;