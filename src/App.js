import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>

        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
