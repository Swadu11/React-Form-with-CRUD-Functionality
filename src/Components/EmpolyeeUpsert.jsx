import React, { useEffect, useState } from 'react'

function EmpolyeeUpsert({empolyee, onAdd , onUpdate, onReset}) {
  const [formState, setFormState]=useState({ 
    name:'',
    age:'',
    emailAddress:'',
    phoneNo:''

  })
  useEffect(()=>{
    if(empolyee){
      setFormState({
        name:empolyee.name,
        age:empolyee.age,
        emailAddress:empolyee.emailAddress,
        phoneNo:empolyee.phoneNo
      })
    }else{
    setFormState({
    name:'',  
    age:'',
    emailAddress:'',
    phoneNo:''
    })
    }
  },[empolyee])

  const handleChange = (e)=>{
    const{name, value} = e.target

    setFormState((prevState)=>({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault(); 

    if(empolyee){
      const updatedEmpolyee ={...empolyee,...formState}
      onUpdate(updatedEmpolyee)
      setFormState({
        name:'',  
        age:'',
        emailAddress:'',
        phoneNo:''
    })
    }else{
      onAdd(formState)
        setFormState({
          name:'',  
          age:'',
          emailAddress:'',
          phoneNo:''
    })
    }
    
    
  }

  return (
    <div>
      <div className="form-container">
        <h1>{empolyee?'Update Empolyee': 'Add Empoylee'}</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={formState.name} onChange={handleChange} />

        <label htmlFor="age">Age</label>
        <input type="number" name='age' value={formState.age} onChange={handleChange} />

        <label htmlFor="email ">Email Address</label>
        <input type="text" name='emailAddress' value={formState.emailAddress} onChange={handleChange} />

        <label htmlFor="phoneNo">phone No</label>
        <input type="number" name='phoneNo' value={formState.phoneNo} onChange={handleChange} />

        <button type='submit' className='btn-submit'>{empolyee?'Update':'Add'}</button>
        <button  className='btn-reset' onClick={onReset}>Reset</button>
        </form>
      </div>
    </div>
  )
}

export default EmpolyeeUpsert



