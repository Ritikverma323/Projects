import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import ComponentHeader from "./Components/Header/ComponentHeader";
import ProductCategory from "./ProductCategory/ProductCategory"
import UserLogin from "./pages/UserLogin";
import RegisterUser from "./pages/USerRegister";
import Admindashboard from "../src/pages/Admindashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ComponentHeader />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/user-login" component={UserLogin} />
          <Route exact path="/user-register" component={RegisterUser} />
          <Route exact path="/admin/login" component={UserLogin} />
          <Route path="/admin" component={Admindashboard} />
          <Route path="/products/categories/:id" component={ProductCategory} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
