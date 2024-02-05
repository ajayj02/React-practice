import {useState} from 'react'
import '../assets/main.css'
import ListTodos from './ListTodos'


function TodoForm() {
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [inputvalue, setInputvalue] = useState([]);

  const handleInput1Change = (event) => {
    event.preventDefault();
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    event.preventDefault();
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
     event.preventDefault();

     setInputvalue((prevInputvalue) => [
        ...prevInputvalue,
        { title: input1, description: input2 },
      ]);  
  }

  setInput1('');
  setInput2('');


  console.log(inputvalue)
  return (
    <div className='inputform'>
    <form>
    <label name="description" value={input1} className='label'>Title: </label>
    <input name="title" className='inputbox'/>
    <br></br>
    <br></br>
    <label name="description" value={input2} className='label'>Description: </label>
    <input name="description" className='inputbox'/>
    <br></br>
    <br></br>
    <button type='submit' className='addbtn' onclick={handleSubmit}>Add Todo</button>
    </form>
    </div>
  )
}

export default TodoForm