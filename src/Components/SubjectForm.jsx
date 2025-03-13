import React from 'react'

const SubjectForm = ({subject,handleChange,addSubject}) => {
  return (
           
       <div className='flex flex-col bg-pink-200 p-2 rounded-lg  '>
       <input   
       className='p-2'
        type="text"
        name='name'
        placeholder='subject'
        value={subject.name}
        onChange={handleChange}
      />
      
      
      <select 
        className='p-2'
        onChange={handleChange}
        name='creditHours'
        value={subject.creditHours}
      >
        <option  value="">Select Credit Hours</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      
      <select
        className='p-2'
        name='grade'
        value={subject.grade}
        onChange={handleChange}>

        <option value="">Select Grade</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
      </select>

      <button className='bg-red-400 cursor-pointer font-semibold text-white rounded p-1 ' 
      onClick={addSubject} >Add Subject</button>

    
    </div>
  )
}

export default SubjectForm