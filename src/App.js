import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { useState, useEffect } from'react';

function App() {

  const [stores, setStores] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then(res => res.json())
    .then(storeData => setStores(storeData))
  }, [])

  const onAddStore = (newStore) => {
    setStores([...stores, newStore]);
  }

  const onSearch = (event) => {
    setSearch(event.target.value);
  }

  const filteredStores = stores.filter(store => {
      return store.name.toLowerCase().includes(search.toLowerCase());
    })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search handleSearch={onSearch}/>
      <NewStoreForm onAddStore={onAddStore}/>
      <StoreList stores={filteredStores}/>
    </div>
  );
}

export default App;
