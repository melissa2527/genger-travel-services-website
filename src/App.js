import {NavBar} from './components/navbar/NavBar';
import {Switch, Route} from 'react-router-dom';
import { Homepage } from './components/homepage/Homepage';
import { Gallery } from './components/gallery/Gallery';
import {Aboutpage} from './components/aboutpage/Aboutpage';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App" >
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/about' component={Aboutpage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
