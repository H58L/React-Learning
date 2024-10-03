import { Fragment } from "react";

let items = [
    'New York',
    'Paris',
    'Woff',
    'Chirp'
]

items = []


function ListGroup()
{
       
    return <>
        <h1>List</h1>
        {items.length === 0 ? <p>Not item found</p> : null}  
        <ul className="list-group">
            
        {items.map((item) => (
            <li key = {item}>{item}</li>
            ))}  
  </ul>
  </>
}

export default ListGroup; //export this onto App