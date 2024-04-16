import React, { useEffect, useState } from 'react'
import { getImages } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const getGifs = async () => {
            const newImages = await getImages(category);
            setImages(newImages);
            setIsLoading(false);
        }
        getGifs();
    }, [])
        
    return {
        images,
        isLoading

    }
}