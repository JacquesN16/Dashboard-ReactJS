import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UsersList from "./pages/usersList/UsersList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductsList from "./pages/productsList/ProductsList";
import Product from "./pages/product/Product";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router className="App">
     <Topbar />
     <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/users">
            <UsersList/>
          </Route>
          <Route exact path="/user/:userId">
            <User/>
          </Route>
          <Route exact path="/newUser">
            <NewUser/>
          </Route>
          <Route exact path="/products">
            <ProductsList/>
          </Route>
          <Route exact path="/product/:productID">
            <Product/>
          </Route>
          <Route exact path="/newproduct">
            <NewProduct/>
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
