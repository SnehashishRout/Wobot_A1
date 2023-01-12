import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import rect from './Resources/rect.png'
import logoo from "./Resources/logo.png"

function App() {
  return (
    <div className="App" style={{backgroundImage:"url('./Resources/rect.png')"}}>
      <img id="Logo-img" src={logoo}></img>
      <Login />
      <footer><p>Terms of Use | Privacy Policy</p></footer>
    </div>
  );
}

export default App;
