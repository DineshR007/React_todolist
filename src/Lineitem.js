import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const Lineitem = ({item,handleChange,handledel}) => {
return (
    <li className='item' key={item.id}>
        <input
        type='checkbox'
        checked={item.checked}
        onChange={()=>handleChange(item.id)}
        />
        <label
        style={(item.checked)?
        {textDecoration:"line-through"}:null}
        onDoubleClick={()=>handleChange(item.id)}>{item.item}</label>
        < FaTrashAlt
        role="button"
        onClick={()=> handledel(item.id)}
        tabIndex="0"/>
</li>
)
}

export default Lineitem