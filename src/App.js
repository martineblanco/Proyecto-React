import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenid@s, soy una prop"/>
     
    </div>
   
  );
}

export default App;
