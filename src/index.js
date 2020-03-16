import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import MyProfile from './Pages/Profile/MyProfile';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom';
import Notfound from './notfound'

const routing = (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/myprofile" component={MyProfile} />
        <Route component={Notfound} />
      </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
registerServiceWorker();
