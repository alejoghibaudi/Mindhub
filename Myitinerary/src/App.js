import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cities from './Pages/Cities';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Itinerary from './Pages/Itinerary';

class App extends React.Component {
  render() {
    return(
		<BrowserRouter>
    <div className='container'>
      <div className='row'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/Cities' component={Cities}/>
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/Cities/:ciudad' component={Itinerary} />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
    )
    }
}

export default App;
