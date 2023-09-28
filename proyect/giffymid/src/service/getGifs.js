
const apiKey = 'bfwqsSYhjQ1N2sZNgKRzX21K6L7Z9qbz'

export default function getGifs( {keyword ='pepe'} = {}){
    const apiURL = 
 `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      //las arrays se declaran en map cuando se tiene que devolver algo 
      // invente el image para savar la imagen dentro del array no declarado
      const gifs = data.map( image => 
        //encontrar la url dentro de 
        //image.images.fixed_width_downsampled.url

        // enviar objetos

        {
            const {images , title, id} = image
        const {url} = images.fixed_width_downsampled
        return {title, id , url}
    }
      )
      return gifs
    })
}