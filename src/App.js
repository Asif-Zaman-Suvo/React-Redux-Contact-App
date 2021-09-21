import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';

function App() {
  return (

    <Router>
    <div className="App">

      <ToastContainer />
      <MenuBar/>

      <Switch>
        <Route exact path="/">
        <h1>Welcome To React-Redux-Contact-App</h1>

        </Route>

        <Route path="/add">
          <h1> I am add component </h1>

        </Route>

        <Route to='/edit/id:'>
          <h1>I am edit component</h1>

        </Route>

      </Switch>
    
    </div>

    </Router>
  );
}

export default App;
