import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
const Additems = ({newItem, setNewItem , handleSubmit}) => {
  const inputRef = useRef()
  return (

    <form className='addForm' onClick={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
        type='text'
        id='addItem'
        ref={inputRef}
        placeholder='Add Item'
        autoFocus
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required/>
        <button
        type='Submit'
        onClick={()=>inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default Additems