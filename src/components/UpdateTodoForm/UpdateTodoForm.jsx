"use client"
import React, { useState } from "react";
import Input from "../Input/Input";
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/Button";
import { todoUpdated } from "../../store/features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const UpdateTodoForm = () => {

    const dispatch = useDispatch();
    const updateForm = useSelector((state) => state.todos.todoUpdate)
    const [update, setUpdate] = useState(updateForm.name)


    const handleSubmit = (e) => {
        
        e.preventDefault()
        dispatch(
            todoUpdated({
                id: updateForm.id,
                name: update
            })
        )
    }
    
    return(
        <div className="UpdateTodoForm">
        <form onSubmit={handleSubmit} className="flex justify-center w-3/4">
        <Input value={update} handleChange={(e) => setUpdate(e.target.value)} placeholder={'update todo'}/>
        <Button btnTitle={'Update'} type={'secondary'}/>
        </form>
        </div>
    )
}
export default UpdateTodoForm;