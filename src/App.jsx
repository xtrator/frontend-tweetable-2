import './styles/App.css'
import {Routes, Route} from 'react-router-dom'; 
import Components from './routes/components/Components';
import Home from './routes/home/Home';
import MissingPage from './routes/status/MissingPage';

function App() {
  return (
    <Routes>
      <Route path="*" element={<MissingPage/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/components" element={<Components/>}></Route>
    </Routes>
  )
}

export default App
