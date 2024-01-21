import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFectchGifs = (category) => {
 
    const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>{
       getGifs(category).then((newImages) => setImages(newImages));   
        setIsLoading(false);
    },[ ]);


    return {

        Images,
        isLoading
    }

}
