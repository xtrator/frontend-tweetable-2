import './styles/App.css'
import TweetForm from "./components/tweet/TweetForm";
import Tweet from "./components/tweet/Tweet";
import {Routes, Route} from 'react-router-dom'; 
import Components from './routes/components/Components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>}></Route>
      <Route path="/components" element={<Components/>}></Route>
    </Routes>
  )
}

export default App
