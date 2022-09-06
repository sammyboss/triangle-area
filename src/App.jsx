import { useState} from 'react'

function App() {

const[height, setHeight] = useState();
const[breadth, setBreadth] = useState();
const[area, setArea] = useState();




const changeHeight = function(e) {
  setHeight(e.target.value)
}

const changeBreadth = function(e) {
  setBreadth(e.target.value)
}


  const submit = function(e) {
    e.preventDefault()
  setArea((0.5 *(height)) * breadth)
  
}




  return (
    <div className='container'>
      <form>
        <label>height
          <input value={height} onChange={changeHeight} type="text"/>
        </label>
        <br/>
        <lebel>breadth
          <input value={breadth} onChange={changeBreadth} type="text"/>
        </lebel>
        <br/>
        <div className='display'> 
        <input onClick={ submit } type="submit"/>
        <div className='span'> 
        <span>{area}</span>
        
        </div>
        </div>
      </form>
      
    </div>
  )
}

export default App
