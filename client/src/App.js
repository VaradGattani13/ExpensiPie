// import logo from './logo.svg';
import './App.css';
import {Navigate, Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<ProtectedRoutes>{<HomePage/>}</ProtectedRoutes>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}


export function ProtectedRoutes(props){
  if(localStorage.getItem('user')){
    return props.children;

  }
  else{
    return <Navigate to='/login'/>
  }
}

export default App;
