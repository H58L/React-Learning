import { Component } from "react"

// Ways to creat a react componenet
// 1. Function based Component
// 2. Class componenet

//Use pAscal casing
function Message() {
const name = 'Lisa';
if(name)
    return <h1>Hello {name}</h1> 
return <h1>Hello World</h1> //JSX - Jaascript XML is this syntax , write javascript code in {}
}

export default Message; //export the function to be able to use it in another componenet 