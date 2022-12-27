import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home'
import LoginRoute from './Pages/LoginRegister/LoginRoute';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login/*' element={<LoginRoute/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;