// {items :[], heading: string} , shape of data which will be passed , ie interface

interface ListGroup_Props{  //type of properties
items: string []; 
heading: string;
}


import { Fragment, useState } from "react";
import { MouseEvent } from "react";


//Hook
//const [selectedIndex, setSelectedIndex] = useState(-1); //This compoenet has data that will change iver time

// arr[0]  //variable
// arr[1]  //updater function
//items = []



// const getMessage = () => {
//    return ListGroup_Props.items.length === 0 ? <p>Not item found</p> : null ;
// }

//event handler
const handleCLick = (event: MouseEvent) =>{
    //selectedIndex = index;
console.log(event);
}

function ListGroup({items, heading}: ListGroup_Props)   //function that gets returned, passing Properties
{
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1); //This compoenet has data that will change iver time   
    return <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No elements</p> }  
    <ul className="list-group">
            
        {items.map((item, index) => (
            <li 
            className = {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key = {item}
            onClick={() => {setSelectedIndex(index);}}
            >
                {item}</li>
            ))}  
  </ul>
  </>
}

export default ListGroup; //export this onto App