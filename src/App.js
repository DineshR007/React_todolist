import { useEffect, useState } from 'react';
import Additems from './Additems';
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Search from './Search';
import apiRequest from './apiRequest';
function App(){
  const API_URL = "http://localhost:3003/items"
  const [items,setItems] = useState([]);
  const [newItem,setNewItem]= useState('')
  const [fetchError,setFetchError] = useState(null)
  const [isLoading,setIsLoading] = useState(true)
  const [searchItem,setSearchItem] = useState('')
  useEffect (() =>{
    const fetchItems = async() => {
      try{
        const response = await fetch(API_URL)
        if (!response.ok) throw Error("Data not received")
        const listItem = await response.json()
        console.log(listItem)
        setItems(listItem)
        setFetchError(null)
      }
      catch(err){
          setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout( () =>{
    (async()=> await fetchItems())()},2000)
  },[])
  const addItem = async (item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem= { id , checked:false, item}
    const listItem = [...items, addNewItem]
    setItems(listItem)
    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type':'application/json'
      },
      body : JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
  }
  const handleChange = async (id)=>{
    const listItem = items.map((item)=>
    item.id===id?{...item,checked:!item.checked}:item)
    setItems(listItem)
    const myItem = listItem.filter((item)=>item.id===id)
    const UpdateOptions = {
      method : 'PATCH',
      headers : {
        'Content-Type':'application/json'
      },
      body : JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl= `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,UpdateOptions)
    if(result) setFetchError(result)
    }
  const handledel = async(id)=>{
    const listItem = items.filter((item)=>
    item.id!==id)
    setItems(listItem)
    const deleteOptions = {method:"DELETE"}
    const reqUrl= `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)
  }
  function handleSubmit(e){
    e.preventDefault()
    if(!newItem) return
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div className='App'>
    <Header/>
    <Additems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
    />
    <Search
      searchItem = {searchItem}
      setSearchItem = {setSearchItem}
    />
    <main>
      {isLoading && <p>Loading Items...</p>}
      {fetchError && <p>{`Error ${fetchError}`}</p>}
    {!isLoading && !fetchError && <Content
      items={items.filter(item =>((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
      handleChange={handleChange}
      handledel={handledel}
    />}
    </main>
    <Footer
    length = {items.length}/>
    </div>
  );
}

export default App;
