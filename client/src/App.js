import Form from './Form/Form';
import Register from './Register/Register';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<Form/>}/>
        <Route path='/' element={<Register/>}/>
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
