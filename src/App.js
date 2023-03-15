import './App.css';
import AllRoutes from './components/Routes.js';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider';
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AllRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
