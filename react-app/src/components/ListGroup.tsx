import { Fragment } from "react";

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

function ListGroup()
{
       
    return <>
        <h1>List</h1>
        {items.length === 0 && <p>No elements</p> }  
        <ul className="list-group">
            
        {items.map((item) => (
            <li 
            className = "list-group-item" 
            key = {item}
            onClick={() => console.log("CLicked")}
            >
                {item}</li>
            ))}  
  </ul>
  </>
}

export default ListGroup; //export this onto App