import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/App.scss';

// Layouts
import Landing from './layouts/Landing';
import Dashboard from './layouts/Dashboard';
import Application from './pages/Application';

// pages
import Home from './pages/Home';
import Help from './pages/Help';
import Templates from './pages/Templates';
import About from './pages/About';
import Account from './pages/Account';
import Contact from './pages/Contact';
import Legacy from './pages/Legacy';
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import DashboardPage from './pages/Dashboard';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Questions from './components/Questions';
import TemplatesTabs from './components/TemplatesTabs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Landing><Home /></Landing></Route>
        <Route exact path='/help'><Landing><Help /></Landing></Route>
        <Route exact path='/templates'><Landing><Templates /></Landing></Route>
        <Route exact path='/about'><Landing><About /></Landing></Route>
        <Route exact path='/contact'><Landing><Contact /></Landing></Route>
        <Route exact path='/terms'><Landing><Terms /></Landing></Route>
        <Route exact path='/legacy'><Landing><Legacy /></Landing></Route>
        <Route exact path='/privacy'><Landing><Privacy /></Landing></Route>

        <Route exact path='/login'><Login /></Route>
        <Route exact path='/register'><Register /></Route>

        <Route exact path='/dashboard'><Dashboard title='mis currículos'><DashboardPage /></Dashboard></Route>
        <Route exact path='/dashboard/account'><Dashboard title='gestionar cuenta'><Account /></Dashboard></Route>
        <Route exact path='/dashboard/help'><Dashboard title='preguntas frecuentes'><Questions /></Dashboard></Route>
        <Route exact path='/dashboard/templates'><Dashboard title='plantillas'><TemplatesTabs /></Dashboard></Route>

        <Route exact path='/app'><Application /></Route>

        <Route path='*'><NotFound /></Route>
      </Switch>
    </Router>
  );
}

export default App;
