import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Project_One from './Pages/Project_One';
import Project_Two from './Pages/Project_Two';
import ScrollToTop from "./Pages/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/devconnect" element={<Project_One />} />
        <Route path="/myblog" element={<Project_Two />} />
      </Routes>
    </Router>
  )
}

export default App;
