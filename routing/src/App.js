import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Shop from './components/Shop'
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
              <Route path='/' element={<Nav />} />
              <Route path='/about' element={<About />}/>
              <Route path='/shop' element={<Shop />}/>
              <Route path='/shop/:id' element={<Shop />}/>
          </Routes>
        </div>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>Home page</h1>
  </div>
}

export default App;
