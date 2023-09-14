import { Routes,Route } from 'react-router-dom';
import Start from "./components/Start";
import Home from './components/Home';
import ProductMain from './components/ProductMain';
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productMain" element={<ProductMain />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
