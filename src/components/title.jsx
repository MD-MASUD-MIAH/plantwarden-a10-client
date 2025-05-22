import { useEffect } from "react"


export const TitleUse = (title)=>{

    useEffect(()=>{

        document.title = ` PlantWarden || ${title}`

    },[title])
}