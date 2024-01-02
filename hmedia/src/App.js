import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const[img,SetImg] = useState(null);

useEffect(()=>{

},[SetImg])

  async function saveFile(e){
    
    
    let formData = new FormData();
    formData.append("img",e.target[0].files[0])

      const response = await fetch('http://localhost:8080/upload', {
        method: "post",
        body: formData
      })
      console.log(response)

      return response.json();
    }

  const clicked = (event)=>{
    event.preventDefault();

 
      const e= saveFile(event)
      console.log(e)
    
   
 
  }
  return (
    <div className="App">
      <h1>HMedia</h1>

      <form encType='multipart/form-data' onSubmit={clicked}>
        <label>upload</label>
        <input type='file' name='file' id='file'></input>
        <button type='submit'>Submit</button>
      </form>

      <img src='../../hmedia-server/uploads/0ae5d7f7d0fa53f196f8f715fbb7d9ad'/>
    </div>
  );
}

export default App;
