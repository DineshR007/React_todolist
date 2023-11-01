import React from 'react';
import Listitem from './Listitem';

const Content = ({items,handleChange,handledel}) => {

  return (
    <>
      {(items.length)?(
        <Listitem
          items = {items}
          handleChange = {handleChange}
          handledel = {handledel}
        />
  ):(
          <p>Your list is empty</p>
        )
        
      }
    </>
  );
}

export default Content