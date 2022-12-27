import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App({ data }) {
  return (
    <div>
      <Navbar />
      <h4 className='nombre'>{data}</h4>
    </div>

  );
}

export default App;
