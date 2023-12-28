import './App.css';
import Door from './components/Door';
import Header from './components/Header';
import StoreStatus from './components/StoreStatus';

function App() {
  return (
    <div className="App">
      <Header />
      <Door />
      <StoreStatus />
    </div>
  );
}

export default App;
