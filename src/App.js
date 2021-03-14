import {NavBar} from './components/navbar/NavBar';
import {Switch, Route} from 'react-router-dom';
import { Homepage } from './components/homepage/Homepage';
import { Gallery } from './components/gallery/Gallery';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/gallery' component={Gallery}/>
      </Switch>
    </div>
  );
}

export default App;
