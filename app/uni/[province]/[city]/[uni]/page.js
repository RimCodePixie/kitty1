"use client";

import { useParams } from "next/navigation"

let Details = ()=>{

    let meraData = useParams()

    return <div>
       <h1>yeh product h {meraData.province} {meraData.city} {meraData.uni}</h1>
    </div>

}

export default Details;