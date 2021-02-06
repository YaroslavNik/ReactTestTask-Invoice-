import { Switch, Route, Redirect } from 'react-router-dom';
import './Styles/App.sass'
import Auth from './Components/Modals/Auth/Auth';
import { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {

  const [forceUpdate, setForceUpdate] = useState(0)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('userData')) setIsAuth(true)
  }, [])
  
  
  return (
    <div className="App">
      <div className="container">
        <Switch>
          {isAuth 
            ? 
              <>
                <Route path = '/' component = {Sidebar}/>
                <Route exact path = '/terminals'/>
                <Route exact path = '/buyers '/>
                <Route exact path = '/buyers:/id'/>
                <Route path = '/*'>
                  <Redirect to = '/terminals'/>
                </Route>
              </>

            : 
              <>
                <Route exact path = '/auth' component = {Auth}/>
                <Route path = '/*'>
                  <Redirect to = '/auth'/>
                </Route>
              </>
          }
        </Switch>
      </div>      
    </div>
  );
}

export default App;
