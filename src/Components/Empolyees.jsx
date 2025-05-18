import React from 'react'

function Empolyees({empolyees, onEdit , onDelete}) {

    if(empolyees.length === 0){
        return <div><h1>No Record to show</h1></div>
    }
    
  return (
    <div className='cards'>
        {empolyees.map((empolyee)=>{
            return <div className='card' key={empolyee.id}>
                <p><span className='title'>Name:</span>{empolyee.name}</p>
                <p><span className='title'>Age:</span>{empolyee.age}</p>
                <p><span className='title'>Email Address:</span>{empolyee.emailAddress}</p>
                <p><span className='title'>Phone No:</span>{empolyee.phoneNo}</p>
                <div className="btn-group">
                    <button className="btn-update" onClick={()=>{onEdit(empolyee.id)}}>Edit</button>
                    <button className='btn-delete' onClick={()=>{onDelete(empolyee.id)}}>Delete</button>
                </div>
            </div>
            
        })}
      
    </div>
  )
}

export default Empolyees
