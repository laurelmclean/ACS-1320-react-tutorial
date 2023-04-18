import { Outlet } from 'react-router-dom'
import './App.css';
import Title from './Title/Title';
import Footer from './Footer/Footer';

function App() {
  return (
    <main className="App">
      <div className='App-content'>
        <Title />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
