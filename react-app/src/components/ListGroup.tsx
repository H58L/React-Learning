import { Fragment } from "react";

const items = [
    'New York',
    'Paris',
    'Woff',
    'Chirp'
]


function ListGroup()
{
    return <>
        <h1>List</h1>
        <ul className="list-group">
            
        {items.map((item) => (
            <li key = {item}>{item}</li>
            ))}  
  </ul>
  </>
}

export default ListGroup; //export this onto App