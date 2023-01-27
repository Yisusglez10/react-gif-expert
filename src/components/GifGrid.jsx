import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from "../hooks/useFetchGifs.js";
// import { getGifs } from "../helpers/getGifs.js";

export const GifGrid = ({ category }) => {

  const {images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {/* {
        isLoading 
        ? (<h2>Cargando...</h2>)
        : null
      } */}
      
      {/* Opcion de arriba o abajo es igual */}
      { 
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {
          images.map(( image ) => (
            <GifItem
              key = {image.id}
              {...image}//desestructura todo para evitar hacer por separado
              // title = {image.title}
              // url = { image.url }
              // image={ image } //Así serían todas las propiedades
            >
            </GifItem>
          ))
        }
      </div>
    </>
  )
}
