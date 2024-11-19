import React from "react";

const Input = ({placeholder, handleChange, value}) => {
    return(
        <div className="Input">
        <input value={value} onChange={handleChange} type="text" placeholder={placeholder} className="block text-gray-500 bg-gray-200 font-bold md:text-right mb-1 md:mb-0 py-2 px-4 mr-2"/>
        </div>
    )
}
export default Input;