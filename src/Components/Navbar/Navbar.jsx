import React, { useRef, useState } from 'react'

export default function Navbar() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const addToddos = () => {
    const text = inputRef.current.value;
    setTodos([...todos, text]);
    inputRef.current.value = "";
  }
  return (
    <div>
     <div className =' docontainer'>
     <h1>To Do List</h1>
     <input ref={inputRef} placeholder='Enter item ...' />
      <button onClick={addToddos} className='btn btn-primary mx-2' >add</button>


      <table className='border'>
        <thead>
          <tr>
            <th>tasks</th>
           
          </tr>
        </thead>
        <tbody>
        <ul className='color'>
        {todos.map((item => {
          return (<li key={indexedDB}>{item}</li>);
        }))}
      </ul>
        </tbody>
      </table>
     
     
      
     </div>
    </div>
  )
}
