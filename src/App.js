import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {Profile} from "./pages/Profile";
import {About} from "./pages/About";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";

function App() {
  return (
      <GithubState>
          <AlertState>
              <BrowserRouter>
                  <Navbar />
                  <div className="container pt-4">
                      <Alert
                          alert={{text: 'Test alert'}}
                      />
                      <Switch>
                          <Route path='/' component={Home} exact/>
                          <Route path='/about' component={About}/>
                          <Route path='/profile/:name' component={Profile}/>
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GithubState>



  );
}

export default App;
