import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTodoComponent from './components/ListTodoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTodoComponent from './components/CreateTodoComponent';
import UpdateTodoComponent from './components/UpdateTodoComponent';
import ViewTodoComponent from './components/ViewTodoComponent';
import LoginComponent from './components/LoginComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {LoginComponent}></Route>
                          <AuthenticatedRoute path = "/todos" component = {ListTodoComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/add-todo/:id" component = {CreateTodoComponent}></AuthenticatedRoute>
                          <AuthenticatedRoute path = "/view-todo/:id" component = {ViewTodoComponent}></AuthenticatedRoute>
                          <Route path = "/login" component = {LoginComponent}></Route>
                          <Route path = "/register" component = {RegisterComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
