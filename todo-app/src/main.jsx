
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react'
import './index.css'
// function Todolist(){
// const[title ,settitle]=useState("")
// const[todo ,settodo]=useState([])
// function submitHandler(e){
// e.preventDefault()
// settodo([...todo, {title} ])
// settitle("")
// console.log(todo)
// }
// function deleteTask(i){
//   let newTask =[...todo]
//   newTask.splice(i,1)
//   settodo(newTask)
// }
// function addTask(i){
//   let newTask =[...todo]
//  let editTask = prompt("enter your text")
//   if(editTask !== null&& editTask.trim() !== ""){
//       newTask.splice(i,1,editTask)
//   settodo(newTask)
//   }

// }
// let renderTask = <h6>No any task yet</h6>
// if(todo.length > 0){
//    renderTask = todo.map((t, i)=>{
//  return <div>
//   <li key={i}>
//     {t.title}
//     <button onClick={()=>deleteTask(i)}>delete</button>
//     <button onClick={()=>addTask(i)}>add</button>
//   </li>
  
//  </div>
//  })
// }


// return(
//   <>
//   <form onSubmit={submitHandler}>
//     <input type="text" 
//     value={title}
//     onChange={(e)=>
//       settitle(e.target.value)
//     }
//     placeholder='enter title here'
//     />
//     <button>add task</button>
//   </form>
//    <div>
//     <ul>{renderTask}</ul>
//    </div>
//   </>
// )
// }
function Todolist(){
const[title,settitle]=useState("")
const[todo,settodo]=useState([])
function todohandler(e){
e.preventDefault()
settodo([...todo,{title}])
console.log(todo)
settitle("")
}
function Deletetodo(i){
let deletedVal =[...todo]
deletedVal.splice(i,1)
settodo(deletedVal)
}
function Edittodo(i){
let updatedVal =prompt("enter text")
  if(updatedVal){
    let updatedTodos = [...todo]
    updatedTodos[i].title = updatedVal
    settodo(updatedTodos)
  }

}
let renderelement = <h3>hello</h3>
renderelement= todo.map((t, i)=>{
  return <div id='container2'>
    <li key={i}>{t.title}
    <button id='btn1' onClick={(e)=>{Deletetodo(i)}}>Delete</button>
    <button id='btn2' onClick={(e)=>{Edittodo(i)}}>Edit</button>
    </li>
    </div>

})
  return(
    <>
    <div id='container'>
    <h1>To-do List</h1>
    <form onSubmit={todohandler}>
    <input type="text"
    value={title} 
    onChange={(e)=>{
      settitle(e.target.value)
    }}
     placeholder='enter text here' />
    <button id='btn'>Add list</button> 
    </form>
    
    <div id='container1'>
      <ul>{renderelement}</ul>
    </div>
    </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
<Todolist/>
)
