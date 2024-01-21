import {useState} from 'react'
import { AddCategory , GifGrid} from './components';

export const GIfExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (NewCategory) => {
     
        if( categories.includes(NewCategory)) return;
            setCategories([NewCategory, ...categories]);
    
    }

  return (
    <>
      
        <h1>GifExpertAPp</h1>
     
        <AddCategory 
        // setCategories = {setCategories}
        onNewCategory = {event => onAddCategory(event)}
        />
             
        {categories.map( category =>{ 
            return <GifGrid key={ category } category={category} /> 
        })}
       
        {/*Listado de items*/ }
        
    </>
  )
}
