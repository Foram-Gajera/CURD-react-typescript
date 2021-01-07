import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import UserForm from './components/UserForm';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/user/:id" component={UserForm} />
          <Route path="/user" component={UserForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
