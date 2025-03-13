import React, { useState } from 'react'
import SubjectForm from './SubjectForm'
import GpaDisplay from './GpaDisplay'
import CourseList from './CourseList'
import { useEffect } from 'react'

const Calculator = () => {
    
   const [subjects,setSubjects]=useState(()=>{
    const savedSubjects = localStorage.getItem('subjects');
  return savedSubjects ? JSON.parse(savedSubjects) : [];
   })

   const [subject,setSubject]=useState({name:"",creditHours:"",grade:""})

   const [gpa,setGpa]=useState(()=>{
    const savedGpa = localStorage.getItem('gpa')
    
    // Handle cases where savedGpa is undefined, null, or invalid
    if (savedGpa && savedGpa !== "undefined") {
      return JSON.parse(savedGpa);
    }
    return null; // Fallback to null
   })


  const addSubject=()=>{
     if(subject.name && subject.creditHours && subject.grade){
      setSubjects((prev)=>[...prev,subject])
      setSubject({name:"",creditHours:"",grade:""})
     }
  }

  const removeSubject=(index)=>{
    const updatedSubjects=subjects.filter((_,i)=>(i!==index))
    setSubjects(updatedSubjects)
   }

   const handleChange=(e)=>{
   const {name,value}=e.target
   setSubject((prev)=>
   ({
    ...prev,
    [name]:value,
   }))
   }
   

   useEffect(() => {
    localStorage.setItem('subjects',JSON.stringify(subjects)) 
   }, [subjects])
   
   useEffect(() => {
     localStorage.setItem('gpa',JSON.stringify(gpa))
   }, [gpa])
   
     
   const gradePoints = {
    'A+': 4.0,
    'A': 3.5,
    'B+': 3.0,
    'B': 2.5,
    'C+': 2.0,
    'C': 1.5,
    'F':0.0
  };

  const calculateGpa = ()=>{
    const totalPoints= subjects.reduce((acc,sub)=>
      acc+gradePoints[sub.grade]*parseFloat(sub.creditHours),0)

    const totalCredits=subjects.reduce((acc,sub)=>
       acc + parseFloat(sub.creditHours),0 )

    const calculateGpa  = totalCredits>0 ? (totalPoints/totalCredits).toFixed(2):0
    setGpa(calculateGpa)
  }

  return (
    <div className='flex flex-col gap-4 p-2 w-full md:w-[30%]  bg-pink-300 md:h-[90vh] rounded mt-2'>
        <div className='flex justify-center font-semibold text-red-500'>
        <h1 className='text-lg'>GPA-CALCULATOR</h1>
        </div>
       <SubjectForm subject={subject} addSubject={addSubject} handleChange={handleChange} />
       <CourseList subjects={subjects} removeSubject={removeSubject} setSubjects={setSubjects} />
       <GpaDisplay calculateGpa={calculateGpa} gpa={gpa}/>

    </div>
  )
}

export default Calculator