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
     <nav className="navbar">
        <h3  className ="navbar__logo" >Orion Gemini</h3>
        <button className="navbar__button" id="themeToggler"><i className='bx bx-sun'></i></button>
    </nav>
     <header>
     <div className="header__title">
            <h1>Hello, There!</h1>
            <h2>How can I help you today?</h2>
        </div>
        <div className="suggests">
            <div className="suggests__item">
                <p className="suggests__item-text">
                    Give tips on helping kids finish their homework on time
                </p>
                <div className="suggests__item-icon">
                    <i className='bx bx-stopwatch'></i>
                </div>
            </div>
            <div className="suggests__item">
                <p className="suggests__item-text">
                    Help me write an out-of-office email
                </p>
                <div className="suggests__item-icon">
                    <i className='bx bx-edit-alt'></i>
                </div>
            </div>
            <div className="suggests__item">
                <p className="suggests__item-text">
                    Give me phrases to learn a new language
                </p>
                <div className="suggests__item-icon">
                    <i className='bx bx-compass'></i>
                </div>
            </div>
            <div className="suggests__item">
                <p className="suggests__item-text">
                    Show me how to build something by hand
                </p>
                <div className="suggests__item-icon">
                    <i className='bx bx-wrench'></i>
                </div>
            </div>
        </div>
        
    </header>
    <section className="prompt">
        <form action="#" className="prompt__form" noValidate>
            <div className="prompt__input-wrapper">
                
                <button className="prompt__form-button" id="sendButton">
                    <i className='bx bx-send'></i>
                </button>
                <button className="prompt__form-button" id="deleteButton">
                    <i className='bx bx-trash'></i>
                </button>
            </div>
        </form>
        <p className="prompt__disclaim">
            Gemini may display inaccurate info, including about people, so double-check its responses.
        </p>
    </section>
    
    <main><textarea 
    className="border rounded w-full"
    value={question}
    onChange={(e)=> setquestion(e.target.value)}
    cols="5"
    rows="1"
    placeholder="ask me anything"
    ></textarea></main>
    
    <button onClick={GenrateAnswer}>Genrate Answer</button>
    <pre>{Answer}</pre>
    <footer>
        <p>© 2024 Orion AI. Built with ❤️ for innovation. <a href="#">Learn More</a></p>
    </footer>
    

    </>
  )
}

export default App
