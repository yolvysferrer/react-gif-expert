export const getImages = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=RXch6Ibs8Pn6W1pErdYe8Xa83MUQkDdQ&limit=10&q=${category}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(gif =>({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
}