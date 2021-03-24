import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Clients from './pages/Clients'
import ComponentHeader from './Components/Header/ComponentHeader'

import UserLogin from './pages/UserLogin'
import RegisterUser from './pages/USerRegister'
import Admindashboard from '../src/pages/Admindashboard'
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Switch>
  <Route exact path="/" component ={Home}/>
  <Route exact path="/about" component ={About} />
  <Route exact path="/clients" component ={Clients}/>
  <Route  path="/user-login" component ={UserLogin}/>
  <Route exact path="/user-register" component ={RegisterUser}/>
  <Route exact path="/admin/login" component ={UserLogin}/>
  <Route path="/admin" component ={Admindashboard}/>

  


</Switch>

</BrowserRouter>
      </div>
  );
}

export default App;
