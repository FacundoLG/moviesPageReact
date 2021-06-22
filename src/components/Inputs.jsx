import React from 'react'
import '../assets/components/inputs.css'
import { BsSearch } from 'react-icons/bs'
const Inputs = () => {
    return (
        <div className="Inputs">
            <input type="text" />
            <button><BsSearch className="icon" /></button>
        </div>
    )
}

export default Inputs
