import {NavBar} from './components/navbar/NavBar';
import {Switch, Route} from 'react-router-dom';
import { Homepage } from './components/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
