import React from 'react'

function CurrentTask({Task,Delete,shiftToDone}) {
  return (
    <div>CurrentTask {Task.length}
       <div>
        {
            Task.map((item,index)=>{
               return(
                <div className='currentTask'>
                <button className='selector' onClick={()=>shiftToDone(index)}></button>
                <div>{item}</div>
                <button onClick={()=>Delete(index)}>Delete</button>
                </div>
               )
            })
        }
       </div>
    </div>
  )
}

export default CurrentTask