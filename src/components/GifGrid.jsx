import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    const {images,isLoading} = useFetchGifs(category);

    return (
        <>
            {isLoading && <h3>Cargando...</h3>}
            <h3>{category}</h3>
            <div className='card-grid'>
                {images.map((img) => (
                    <GifItem 
                    key={img.id}
                    {...img}
                    />
                ))};
            </div>
        </>
    )
}
