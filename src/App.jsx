import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Image from './assets/Image/BG.jpg';
import LoginPage from './component/LoginPage';
import BlogPost from './component/BlogPost';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/blog" element={<BlogPost/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;