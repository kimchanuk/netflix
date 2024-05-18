import { Outlet } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/header/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default App;
