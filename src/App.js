import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import './App.css';

function App() {
  const routes = useRoutes()

  return (
    <Router>
      <div className="App container">
        {routes}
      </div>
    </Router>
    
  );
}

export default App;
