import React from 'react';
import './InputOption.css';

const inputOption = ({Icon, text,color}) =>{
    return (
        <div className='inputOption'>
        {<Icon style={{color:color}}/>}
            <h4>{text}</h4>
        </div>
    )

}

export default inputOption;