import React from 'react'
const Search = ({searchItem,setSearchItem}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
    <input
    id='search'
    type='text'
    role='searchbox'
    autoFocus
    required
    placeholder='Search items'
    value={searchItem}
    onChange={(e)=>setSearchItem(e.target.value)}
    />
    </form>
  )

  }
export default Search