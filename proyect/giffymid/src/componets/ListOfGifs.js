import React, { useEffect, useState } from "react"
import Gif from "./Gif.js"
import getGifs from "../service/getGifs.js"



export default function ListOfGifs({ params }) {
    const { keyword }=params
    const [gifs, setGifs]=useState([])
    //como mostrar el cargar
    const [loading, setLoading]=useState(false)

    useEffect(
        function () {
            setLoading(true)
            getGifs({ keyword }).then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })

        }, [keyword])

        if (loading) return <i>CARGANDO🐱‍🏍</i>

    return <div>
        {
            gifs.map(
                ({ id, title, url }) =>
                    <Gif key={id} title={title} id={id} url={url} />
            )
        }
    </div>
}