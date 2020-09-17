import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Login from "./components/login";
import SignUp from "./components/signup";
import './App.css';

function App() {
  return (
  <div className="App">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <BrowserRouter basename={window.location.pathname || ''}>
          <Route exact path='/' component={Login} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </BrowserRouter>
      </div>
    </div>
  </div>
  );
}

export default App;