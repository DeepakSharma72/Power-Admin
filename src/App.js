import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import { DarkModeContext } from './context/DarkModeContext';
import { useContext } from 'react';

function App() {
  const { darkmode } = useContext(DarkModeContext);
  return (
    <div className={darkmode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/users'>
            <Route index element={<List />}></Route>
            <Route path=':userid' element={<Single />}></Route>
            <Route path='new' element={<New inputs={userInputs} title="Add New User" />}></Route>
          </Route>
          <Route path='/products'>
            <Route index element={<List />}></Route>
            <Route path=':userid' element={<Single />}></Route>
            <Route path='new' element={<New inputs={productInputs} title="Add New Product" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
