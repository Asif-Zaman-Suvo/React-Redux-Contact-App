import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import Homepage from './Components/Homepage/Homepage';
import MenuBar from './Components/MenuBar/MenuBar';
import EditContact from './Components/EditContact/EditContact';

function App() {
  return (

    <Router>
    <div className="App">

      <ToastContainer />
      <MenuBar/>

      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        
        </Route>

        <Route path="/add">
          <AddContact/>

        </Route>

        <Route exact path='/edit/:id'>
          <EditContact/>
        </Route>

      </Switch>
    
    </div>

    </Router>
  );
}

export default App;
