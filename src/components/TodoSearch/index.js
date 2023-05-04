import {React} from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){
  const onSearchValue = (event) => {
    const userSearch = event.target.value;
    setSearchValue(userSearch);
  }
  
  return (
    <input 
      className='TodoSearch borderR' 
      type="search" 
      placeholder='¿Qué buscar...? 🔍'
      value={searchValue}
      onChange={onSearchValue}
    />
  );
}
  
export {TodoSearch};