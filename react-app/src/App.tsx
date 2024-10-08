// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

import { useState } from "react";
import Message from "./Message" 
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup" //importing Message componet, can be used jsut like an HTML componenet


function App() {

  const [alertVisisble, setAlertVisiblity] = useState(false);
  let items = ["New Yo","Paris", "Woff","Chirp"];
  let text = "Hello World"
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}></ListGroup>
  {   alertVisisble && <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>} 
  <Button onClick={() => setAlertVisiblity(true)} color="primary"> Primary Button </Button>
  <Button onClick={() => console.log("clicked")} color="secondary">Secondary Button </Button>
  <Button onClick={() => console.log("clicked")} color="success">Success </Button>
  <Button onClick={() => console.log("clicked")} color="danger">Danger </Button>
  </div> //each compoent has ot's own state
 
}

export default App;