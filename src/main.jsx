import { createRoot } from 'react-dom/client'
import HomePage from '/src/screens/home/home_page.jsx';
import Contact from '/src/screens/contact/contact.jsx';
import About from '/src/screens/about/about.jsx';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  </Router>
)