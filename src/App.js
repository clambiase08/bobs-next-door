import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from'react';

function App() {

  const [stores, setStores] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then(res => res.json())
    .then(storeData => setStores(storeData))
  }, [])

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search />
      <NewStoreForm />
      <StoreList stores={stores}/>
    </div>
  );
}

export default App;
