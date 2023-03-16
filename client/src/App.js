import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get('/memes').then(res => {
      setMemes(res.data);
    })
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
