
import { useState , useEffect } from 'react';
import './App.css';
import CompletedTask from './components/CompletedTask';
import CurrentTask from './components/CurrentTask';

function App() {
  const[text,setText]=useState('');
  const[currArr , setCurrArr]=useState([]);
  const[completedArr,setCompletedArr]=useState([]);
  const addToCurrentTask =()=>{
    setCurrArr([...currArr,text]);
    setText('');
  }
  
  const Delete=(index)=>{
    document.getElementById("footer").style.display="block";
    document.getElementById("footer").innerText="deleted task";
    setTimeout(() => {
      document.getElementById("footer").style.display="none";
    }, 1000);
    let newArr=[...currArr];
    newArr.splice(index,1);
    setCurrArr(newArr);
    console.log("delete");
  }
  const shiftToDone=(index)=>{
    document.getElementById("footer").style.display="block";
    document.getElementById("footer").innerText="Task Completed";
    setTimeout(() => {
      document.getElementById("footer").style.display="none";
    }, 1000);
    let doneItem="";
    for(let i=0;i<currArr.length;i++)
    {
      if(i===index)
      {
        doneItem=currArr[index];
      }
    }
    // alert(`task completed`);
    setCompletedArr([...completedArr,doneItem]);
    let newArr=[...currArr];
    newArr.splice(index,1);
    setCurrArr(newArr);

  }

  const DeleteDoneTask=(index)=>{
    document.getElementById("footer").style.display="block";
    document.getElementById("footer").innerText="deleted task";
    setTimeout(() => {
      document.getElementById("footer").style.display="none";
    }, 1000);
    let newArr=[...completedArr];
    newArr.splice(index,1);
    setCompletedArr(newArr);
    console.log("delete");
  }

  const swap=()=>{
    console.log('swap')
    document.getElementById("footer").style.display="block";
    document.getElementById("footer").innerText="swapped";
    setTimeout(() => {
      document.getElementById("footer").style.display="none";
    }, 1000);
    let newCurrArr=[];
    for(let i=0;i<completedArr.length;i++)
    {
      newCurrArr.push(completedArr[i]);
    }
    console.log("newCurrArr",newCurrArr);
    let newCompletedArr=[];
    for(let i=0;i<currArr.length;i++)
    {
      newCompletedArr.push(currArr[i]);
    }
    console.log("newCompletedArr",newCompletedArr);
    setCurrArr(newCurrArr);
    setCompletedArr(newCompletedArr);
  }
  return (
    <div className="App">
       <div>
            <input type="text" placeholder='Type new Task' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={addToCurrentTask} className="addTask">Add Task</button>
        </div>
      <div className='outer-box'>
      <CurrentTask Task={currArr} Delete={Delete} shiftToDone={shiftToDone}/>
      <button onClick={swap} className="swap">⬅️SWAP➡️</button>
      <CompletedTask Done={completedArr} DeleteDoneTask={DeleteDoneTask}/>
      </div>
      <footer id='footer'></footer>
    </div>
  );
}

export default App;
