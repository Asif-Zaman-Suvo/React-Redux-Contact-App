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
import { createStore } from 'redux';
import contactReducer from './Redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';


const store = createStore(contactReducer,composeWithDevTools());

function App() {
  return (
  <Provider store={store}>
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
  </Provider>
    
  );
}

export default App;
