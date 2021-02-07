import { Switch, Route, Redirect } from 'react-router-dom';
import './Styles/App.sass'
import Auth from './Components/Modals/Auth/Auth';
import { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Terminals from './Pages/Terminals/Terminals';
import Buyers from './Pages/Buyers/Buyers';

const App = () => {

  const [forceUpdate, setForceUpdate] = useState(0)
  const [isAuth, setIsAuth] = useState(false)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('userData')) setIsAuth(true)
    setIsFetching(false)
  }, [])

  return isFetching ? null : (
    <div className="App">
      <div className="container">
          <Switch>
            {isAuth 
              ? 
                <>
                  <Route path = '/' component = {Sidebar}/>
                  
                  <div className="container-content">
                    <Route path = '/terminals' component = {Terminals}/>
                    <Route path = '/buyers' component = {Buyers}/>
                    <Route path = '/buyers:/id'/>
                    {/* <Route path = '/*'>
                      <Redirect to = '/terminals'/>
                    </Route> */}
                  </div>
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
