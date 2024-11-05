import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [question, setquestion] = useState("");
  const [Answer,setAnswer]=useState("")
  async function GenrateAnswer(){
    setAnswer("loading..");
   const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCUwE3E4dZAtiS-SNGbkGq91FLXKuWXo3k",
      method:"post",
      data:{
        contents:[
          {parts:[{text:question}]},
        ],
      },

    });
    
      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);


  }

  return (
    <>
    <h1 className="bg-red-300">Tanishk AI</h1>
    <textarea 
    className="border rounded w-full"
    value={question}
    onChange={(e)=> setquestion(e.target.value)}
    cols="20"
    rows="10"
    placeholder="ask me anything"
    ></textarea>
    <button onClick={GenrateAnswer}>Genrate Answer</button>
    <p>{Answer}</p>

    </>
  )
}

export default App
