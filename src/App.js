import './App.css';
import {useState} from 'react'
import Home from './components/Pages/Home';
import Initial from './components/Pages/Initial';

function App() {
  const [ listTransactions, setListTrasanctions ] = useState([])
  const [isLoggedin, setIsLoggedin] = useState(false)
  

  const handleListTransactions = (transaction) => {
    setListTrasanctions([...listTransactions, transaction])
  }

  const removeTransaction = (transactionId) => {
    const newListTransactions = listTransactions.filter(({id}) => Number(transactionId) !== id)
    setListTrasanctions([...newListTransactions])
  }


  const handleIsLoggedin = () => {
    setIsLoggedin(!isLoggedin)
  }

  return (
    <>
    {isLoggedin ? 
    <Home 
      handleIsLoggedin={handleIsLoggedin} 
      listTransactions={listTransactions} 
      setListTrasanctions={setListTrasanctions} 
      handleListTransactions={handleListTransactions}
      removeTransaction={removeTransaction}
    /> 
    : 
    <Initial handleIsLoggedin={handleIsLoggedin}/>}
    </>
  );
}

export default App;
