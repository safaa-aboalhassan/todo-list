import React, { useRef, useState } from 'react'

export default function Navbar() {
  const [taskList, setTask] = useState([]);
  const [indexvalue , setindexValue] = useState(-1);
  const inputRef = useRef();

  const addToddos = () => {
   let taskName = document.getElementById('taskName');
   let btn = document.getElementById('editBtn');
   if(taskName.value){
    if(btn.innerText == 'Add'){
      let deepCopyOfList=[...taskList]
      deepCopyOfList.push(taskName.value)
      setTask(deepCopyOfList);
      
    }
    else{
      let deepCopyOfList=[...taskList] 
      deepCopyOfList.splice(indexvalue,1,taskName.value)
      setTask(deepCopyOfList);
      btn.innerText ='Add';

    }
    
   }
    // setTodos([...todos, text]);
    // inputRef.current.value = "";

  }
  const DeleteToddos = (id) => {
    let deepCopyOfList=[...taskList]
    deepCopyOfList.splice(id,1)
    setTask(deepCopyOfList);
}
const editToddos = (id)=>{
  let taskName = document.getElementById('taskName');
  let task = taskList[id];
  taskName.value = task;
  document.getElementById('editBtn').innerText='Edit';
  setindexValue(id);
}
  return (
    <div>
     <div className =' docontainer'>
     <h1>To Do List</h1>
     <input  id='taskName' ref={inputRef} placeholder='Enter item ...' />
      <button onClick={addToddos} id='editBtn' className='btn btn-primary mx-2' >Add</button>


      <table className='border'>
        <thead>
          <tr>
          <th>#</th>
            <th>tasks</th>
           
          </tr>
        </thead>
      
      <tbody>
     
  {taskList.map((task,index)=>( <tr>
      <td >{index}</td>
      <td>{task}</td>
     
<td>
<button  onClick={() => DeleteToddos(index)} className='btn btn-danger mx-2'>Delete</button>
<button onClick={() => editToddos(index)} className='btn btn-warning ' >Edit</button>

</td>
</tr>))}
        </tbody>
      </table>
     
     
      
     </div>
    </div>
  )
}
