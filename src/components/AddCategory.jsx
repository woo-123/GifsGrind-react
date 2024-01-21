import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
 
    const [input, setInput] = useState('¿Que buscas ? ');
 
        const handler =  (event) => {
            setInput(event.target.value)
          
        }
        const onSubmit = (event) => {
            event.preventDefault();
           if( input.trim().length <= 1) return ;
            onNewCategory(input.trim())
         
            setInput('');
            
        }

    return (
   <form onSubmit={(event) => onSubmit(event)}>
       <input type='text' placeholder='Buscar gifs' value ={input}  onChange={ handler} /> 

   </form>
  )
}
