
import { useParams } from "react-router-dom"

function Details(){

    const {id}=useParams();
    console.log(id);    
        return(
            <>
           
            <h1>Detailed Page</h1>
            </>
        )
    
}

export default Details