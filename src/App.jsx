import { useEffect, useState } from "react";
import Empolyees from './components/Empolyees';
import EmpolyeeUpsert from './Components/EmpolyeeUpsert'


function App() {
  const [empolyees, setEmpolyees]=useState([
        {   id:1,
            name:'Swadeshwar',
            age:21,
            emailAddress:'Swa11@gmail.com',
            phoneNo:123456677,
        },
        {
            id:2,
            name:'rockey',
            age:22,
            emailAddress:'rockey123@gmail.com',
            phoneNo:3456789876,
        },])

    const[empolyee, setEmpolyee]=useState(null)

    useEffect(()=>{},[empolyee])

    const handelAdd= (newEmpolyee)=>{
      setEmpolyees((prevEmpolyee)=>[
        ...prevEmpolyee,{...newEmpolyee, id:prevEmpolyee.length+1}
      ])
    }   
      
    const handleEdit = (id)=>{
      const emp =empolyees.find((x)=>x.id === id)
      setEmpolyee(emp)
    }

    const handleUpdate = (updateEmpoylee)=>{
      setEmpolyees((prevEmpolyees)=>
        prevEmpolyees.map((emp)=>
          emp.id === updateEmpoylee.id ? updateEmpoylee : emp
      )
    )
      setEmpolyee(null)
    }

    const handleReset = ()=>{
      setEmpolyee(null)
    }

    const handleDelete = (id)=>{
      setEmpolyees((prevEmpolyees)=>
        prevEmpolyees.filter((emp)=>emp.id !==id)
      )
    }

  return (
    
    <div className="heading">
      <h1>React Form with CRUD Functionality</h1>
      <div className="main-container">
        <Empolyees empolyees={empolyees} onEdit={handleEdit} onDelete={handleDelete}/>
        <EmpolyeeUpsert empolyee={empolyee} onAdd={handelAdd} onUpdate={handleUpdate} onRest={handleReset}/>
      </div>
    </div>
  )
}

export default App
