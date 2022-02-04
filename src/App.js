import './App.css';
import {useState} from 'react'
import Home from './components/Pages/Home';
import Initial from './components/Pages/Initial';

function App() {
  const [ listTransactions, setListTrasanctions ] = useState([])

  const handleListTransactions = (transaction) => {
    setListTrasanctions([...listTransactions, transaction])
  }

  const [isLoggedin, setIsLoggedin] = useState(false)

  const handleIsLoggedin = () => {
    setIsLoggedin(!isLoggedin)
  }

  return (
    <>
    {isLoggedin ? 
    <Home handleIsLoggedin={handleIsLoggedin} listTransactions={listTransactions} setListTrasanctions={setListTrasanctions} handleListTransactions={handleListTransactions}/> 
    : 
    <Initial handleIsLoggedin={handleIsLoggedin}/>}
    </>
  );
}

export default App;
