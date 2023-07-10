import React from "react";
import './style.css'

function Button({name, active, onClick}){
    return(
        <div className='containerButton'>
        <button onClick={() => onClick(0)} className={active ? 'button' : 'disabledButton'}>{name}</button>
        <span>Seus dados estao a salvo</span>
        </div>
    )
}

export default Button;