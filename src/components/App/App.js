import React, { Component } from 'react';
import FormContainer from '../Form/FormContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header className="_header"/>
        <div className="_content">
          <FormContainer />
          <div>
            list
          </div>
        </div>
        <Footer  className="_footer" />
      </div>
    );
  }
}

export default App;
