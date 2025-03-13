import React from 'react'
import { RxCross2 } from "react-icons/rx";


const CourseList = ({subjects,removeSubject}) => {


  return (
    <div>

      {subjects.map((sub,index)=>(
       
       <div key={index} className='border border-red-400 '>
        <div className='flex items-center justify-between'>
        {index+1}. {sub.name} - {sub.creditHours}Ch -
       Grade : {sub.grade}
       <RxCross2 onClick={()=>removeSubject(index)} className='text-red-500'/>
       </div>
        </div>
        
        
      ))}
    </div>
  )
}

export default CourseList