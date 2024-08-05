import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css';
import Login from './components/pages/Login';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
