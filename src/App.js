import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/App.scss';

// Layouts
import Landing from './layouts/Landing';
import Dashboard from './layouts/Dashboard';

// Pages
import Home from './pages/Home';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Landing><Home /></Landing></Route>
        <Route path='/help'><Landing><Help /></Landing></Route>
        <Route path='/templates'><Landing><div>Plantillas</div></Landing></Route>
        <Route path='/about'><Landing><div>Acerca de nosotros</div></Landing></Route>
        <Route path='/contact'><Landing><div>Contactanos</div></Landing></Route>

        <Route path='/login'><div>Ingresar</div></Route>
        <Route path='/register'><div>Registrate</div></Route>

        <Route exact path='/dashboard'><Dashboard><div>Mi dashboard</div></Dashboard></Route>
        <Route path='/dashboard/account'><Dashboard><div>Cuenta del usuario!</div></Dashboard></Route>
        <Route path='/dashboard/help'><Dashboard><div>Preguntas Frecuentes!</div></Dashboard></Route>

        <Route path='/app'><Dashboard><div>App</div></Dashboard></Route>

        <Route path='*'><div>Page Not Found: 404</div></Route>
      </Switch>
    </Router>
  );
}

export default App;
