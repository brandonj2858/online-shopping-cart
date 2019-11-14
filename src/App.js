import React, {Component} from 'react';
import Router from './Router';
import Navigation from './components/Navigation'




import './App.css';

class App extends Component {
  render() {
    return(
      <div className="page-container">
        <Navigation/>
        <marquee><h1 className='site-header'>Welcome to the Site!</h1></marquee>
        <Router/>
      </div>
    )
  }


}

export default App;
