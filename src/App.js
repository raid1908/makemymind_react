import React from 'react';

//style:
import "../src/scss/main.scss";


//komponenty stałe:
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
//podstrony:
import Index from '../src/pages/Index';
import Trainers from '../src/pages/Trainers';
import Trainings from '../src/pages/Trainings';
import Contact from '../src/pages/Contact';

//zmienne:
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
    
      <BrowserRouter>
        <Switch>

          {/* dlaczego pierwsze uniwerslane / nie działa? */}
          <Route exact path="/" component={Index} />
          <Route exact path="/index.html" component={Index} />
          <Route exact path="/trainers.html" component={Trainers} />
          <Route exact path="/trainings.html" component={Trainings} />
          <Route exact path="/contact.html" component={Contact} />   
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;