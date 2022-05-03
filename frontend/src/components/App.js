import '../styles/App.css';
import { useState,useEffect } from 'react';
import Uploader from './Uploader';
import Footer from './Footer'
import Loader from './Loader'

function App() {
  const [load, setLoad] = useState(false)
  
  
  useEffect(()=> {
    let timer = setTimeout(() => setLoad(true), 2000);
    return () => {
      clearTimeout(timer);
    }
  },[])

  return (
    <div>
   
    {!load
      ? <div> <Loader /> </div>
      : <div> <Uploader /> <Footer /> </div>
    }
    </div>
  );
}

export default App