
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './Components/Header'
import {WatchList} from './Components/WatchList'
import {Watched} from './Components/Watched'
import {Add} from './Components/Add'
import './lib/font-awesome/css/all.min.css'
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>

          <Switch>
            <Route exact path="/">
              <WatchList/>
            </Route>

            <Route exact path="/watched">
              <Watched/>
            </Route>

            <Route exact path="/add">
              <Add/>
            </Route>

          </Switch>
      
    </Router>
    </GlobalProvider>
  );
}

export default App;
