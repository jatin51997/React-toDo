import React from 'react'

function CompletedTask({Done,DeleteDoneTask}) {
  return (
    <div className='CompletedTask'>CompletedTask {Done.length}
        <div>
        {
            Done.map((item,index)=>{
               return(
                <div className='currentTask'>
                <button >✅</button>
                <div>{item}</div>
                <button onClick={()=>DeleteDoneTask(index)}>Delete</button>
                </div>
               )
            })
        }
       </div>
    </div>
  )
}

export default CompletedTask