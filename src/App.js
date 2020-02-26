import React from 'react';
import './App.css';
//style:
import "../src/scss/main.scss";


//komponenty stałe:
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
//podstrony:
import Index from '../src/pages/Index';
import Trainers from '../src/pages/Trainers';

//zmienne:
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/trainers.html" component={Trainers} />
          
          

        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;