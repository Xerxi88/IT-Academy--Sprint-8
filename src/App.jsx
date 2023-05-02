import "./App.css";
import logo from "./images/logo.png";
import Home from "./routes/Home"
import Main from "./routes/Main"
import Error from "./routes/Error"
import Nav from "./Nav"
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <header>
        <img src={logo} alt="logo" width="200px" />
      </header>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Navigate to="/"/>}/>
          <Route path="/starships" element={<Main/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
