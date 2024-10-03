import { Fragment } from "react";
import { MouseEvent } from "react";
let items = [
    'New York',
    'Paris',
    'Woff',
    'Chirp'
]

//items = []


const getMessage = () => {
   return items.length === 0 ? <p>Not item found</p> : null ;
}

//event handler
const handleCLick = (event: MouseEvent) =>{
console.log(event);
}

function ListGroup()
{
       
    return <>
        <h1>List</h1>
        {items.length === 0 && <p>No elements</p> }  
        <ul className="list-group">
            
        {items.map((item, index) => (
            <li 
            className = "list-group-item" 
            key = {item}
            onClick={handleCLick}
            >
                {item}</li>
            ))}  
  </ul>
  </>
}

export default ListGroup; //export this onto App