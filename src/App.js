import React, {useState} from "react";
import { Jumbotron, Form, FormControl, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function ToDoApp() {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  //update input to list
  const updateInput = (value) => {
    setUserInput(value); 
  };
  
  //Add input to list
  const addTask = () => {
  if (userInput.trim() !== '') {
   const newItem = {
      id: Math.random(),
      value : userInput
  };
  setList([...list, newItem] );
  setUserInput('');

  }
}

   //Delete an input
   const deleteItem = (id) => {
    const updatedlist = list.filter(item => item.id!=id);
    setList(updatedlist);
   }

   return (
    // BASIC UI
    // <div>
    //   <h1>TO-DO LIST</h1>
    //   <input 
    //   type="text" 
    //   value={userInput}
    //   onChange={(e) => updateInput(e.target.value)}
    //   />
    //   <button onClick={addTask}>Add</button> 

    //   {list.map((item) => (
    //     <div key={item.id}>
    //       {item.value}
    //       <button onClick={() => deleteItem(item.id)}>Delete</button>
    //     </div>
    //   ))}
      
    // </div>

    <div className="custom-jumbotron">
        <h1>TO-DO LIST</h1>
        <Form>
          <FormControl
            type="text"
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
          />
        </Form>
        <Button variant="primary" onClick={addTask}>
          Add
        </Button>

      <ListGroup>
        {list.map((item) => (
          <ListGroupItem key={item.id} className="d-flex justify-content-between align-items-center">
            {item.value}
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
   );
 
  
}

export default ToDoApp;