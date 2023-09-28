import React , { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../service/getGifs"



export default function ListOfGifs({keyword ='pepo'} ){
    const [gifs, setGifs]=useState([])

  useEffect(
    function () {
      getGifs({ keyword }).then(gifs => {
        setGifs(gifs)
      })

    }, [keyword])
    return gifs.map(
        ({id,title,url}) => 
        <Gif key={id} title={title} id={id} url={url}/>
        )
}