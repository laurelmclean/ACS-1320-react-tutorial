import { Outlet } from 'react-router-dom'
import './App.css';
import Footer from './Footer'

import Title from './Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
