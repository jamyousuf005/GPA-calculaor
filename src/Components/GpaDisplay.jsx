import React from 'react'

const GpaDisplay = ({calculateGpa,gpa}) => {
  return (
    <div>
             <button className='w-full bg-red-400 rounded font-semibold text-white' 
             onClick={calculateGpa}>Calculate</button>
             {gpa!==null && <div className='text-lg text-red-500 font-semibold'>Your GPA is: {gpa}</div>}
    </div>
  )
}

export default GpaDisplay