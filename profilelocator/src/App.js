import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/adlogin' element={<AdminLogin></AdminLogin>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
