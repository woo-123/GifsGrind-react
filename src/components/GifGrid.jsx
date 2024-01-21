
import { GifGridItem } from './GifGridItem';
import { useFectchGifs } from '../hooks/useFectchGifs';




export const GifGrid = ({category}) => {
    
   
const {Images,isLoading}  = useFectchGifs( category )
    

    return (
    <>
        <h3>{category}</h3>
        {
          isLoading 
          ? (<h2>Cargando....</h2>) 
          : null
        }
        <div className='card-grid'>
          {Images.map( (Images) => (<GifGridItem key ={Images.id} img ={Images}></GifGridItem>))}
        </div>
    </>
  )
}
