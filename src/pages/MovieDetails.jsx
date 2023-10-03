import { get } from "../data/httpClient"
import { useParams } from "react-router-dom"
import { UseEffect, useEffect, useState} from "react"


export function MovieDetails(){
    const {movieId} = useParams
    const [movie, setMovie] = useState(null);
    useEffect(()=>{
        get("/movie/"+ movieId).then((data)=>{
            setMovie(data)
        })
     }, [movieId])
    return(
        <div>
            <p>hola</p>
        </div>
    )
}