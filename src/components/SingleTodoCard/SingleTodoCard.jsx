"use client"
import React, { useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { todoDeleted, toggleInputForm } from "../../store/features/todo/todoSlice";


const SingleTodoCard = ({title, id}) => {

const [done, setDone] = useState(false);
const dispatch = useDispatch();


    return(
        <div className="SingleTodoCard flex justify-between bg-red-100 py-2 rounded shadow">
        <div className="px-4">
        <h2 className={done ? 'line-through' : ''}>{title}</h2>
        </div>
        <div className="px-4 flex space-x-4">
        <FaRegCheckSquare onClick={() => setDone(!done)} className="text-green-500" />
        <FaRegEdit onClick={() => dispatch(toggleInputForm({id: id, name: title}))} className="text-orange-500"/>
        <RiDeleteBin6Line onClick={() => dispatch(todoDeleted(id))} className="text-red-500"/>
        </div>
        </div>
    )
}
export default SingleTodoCard;