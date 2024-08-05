import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { NotFound } from './NotFound';
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
            { /*  404 page, must be last. */}
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;