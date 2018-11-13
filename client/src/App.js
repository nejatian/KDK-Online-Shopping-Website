import React, { Component } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'

import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/layout/Footer';
import Landing from '../src/components/layout/Landing';
import Register from '../src/components/user/register';
import Login from '../src/components/user/login';
import Profile from '../src/components/user/profile';

import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar/>
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
        </div>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;