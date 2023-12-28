import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import CreateAccount from './components/CreateAccount';


function Loading(){

  return(
    <div>
      Loading
    </div>
  )
}



function Routers(){

  return(
    <div>
      <Routes>
        <Route path='' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
      </Routes>
    </div>
  )
}



function App() {
  const [loading, setLoading] = useState(true);


 

  function init(){
    setLoading(false);
  }

  useEffect(()=>{
    init();
  },[])
  
  return (
    <div>
      { loading ? <Loading/> : <Routers/> }
    </div>
  );
}

export default App;
