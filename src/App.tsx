
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element = {<HomePage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
