import React from 'react';
import Lineitem from './Lineitem';
const Listitem = ({items,handleChange,handledel}) => {
return (
    <ul>
    {items.map((item) =>(
    <Lineitem
    item = {item}
    key={item.id}
    handleChange = {handleChange}
    handledel = {handledel}
    />
    )
    )}
    </ul>
)
}

export default Listitem