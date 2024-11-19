"use client"
import React from "react";


export const Button = ({btnTitle, handleClick, type}) => {

    return(
        <div className="btn">
        <button className={type === 'primary' ? 'btn bg-blue-600 px-4 py-2 text-white rounded' : 'btn bg-green-600 px-4 py-2 text-white rounded'} onClick={handleClick}>{btnTitle}</button>
        </div>
    )
}
export default Button;