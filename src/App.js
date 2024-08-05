import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/blogs/:id" element={ <BlogDetails /> } />
            <Route path="/create" element={ <Create /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;