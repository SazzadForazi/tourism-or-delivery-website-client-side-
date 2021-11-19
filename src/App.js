import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contract from './components/Home/Contract/Contract';
import Notfound from './components/Home/Notfound/Notfound';
import Nav from './components/Home/Nav/Nav';
import Banner from './components/Home/Banner/Banner';
import Footer from './components/Home/Footer/Footer';
import Login from './components/Home/Login/Login';
import AuthProvider from './components/hooks/AuthProvider';
import Services from './components/Home/Services/Services';
import OurService from './components/Home/OurService/OurService';
import PrivateRoute from './components/hooks/PrivateRoute/PrivateRoute';
import Service from './components/Home/Service/Service';
import Booking from './components/Booking/Booking';
import Home from './components/Home/Home/Home';
import MyOrder from './components/Booking/MyOrder';


function App() {
  return (
    <div className="App">

      <AuthProvider>

        <Router>
          <Nav></Nav>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/contact'>
              <Contract></Contract>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route exact path="/myOrders">
              <MyOrder></MyOrder>
            </Route>
            <PrivateRoute path='/services'>
              <Service></Service>
            </PrivateRoute>
            <Route path='/addservice'>
              <Services></Services>
            </Route>
            <Route path='/contact'>
              <Contract></Contract>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
