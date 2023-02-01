import React from "react";
import { useEffect,useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
const HomePage =()=>{
    const parameters = useParams()
    const location = useLocation()
    const params = useParams()
    console.log(parameters,"parameters")
    console.log(location,"location")
    console.log(params,"params")
    return(
        <div>
            "Hello world this is home Page"
        </div>
    )

}

export default HomePage