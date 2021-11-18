import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import { Route } from 'react-router';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import AddDestination from './Pages/AddDestination/AddDestination';
import ManageDestinations from './Pages/ManageDestinations/ManageDestinations';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import { Switch } from 'react-router-dom';
import useCart from './hooks/useCart';
import { useState } from 'react';
import { addToDb } from './utilities/fakedb';
import MyOrders from './Pages/MyOrders/MyOrders';



function App() {
  const [cart, setCart] = useCart();



  const handleAddToCart = (destination) => {
    const exists = cart.find(dst => dst.id === destination.id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter(dst => dst.id !== destination.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, destination];
    }
    else {
      destination.quantity = 1;
      newCart = [...cart, destination];
    }
    setCart(newCart);
    // save to local storage 
    addToDb(destination.id);

  }



  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home ></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:destinationId">
              <Booking handleAddToCart={handleAddToCart}></Booking>
            </PrivateRoute>
            <Route path="/addDestination">
              <AddDestination></AddDestination>
            </Route>
            <Route path="/manageDestinations">
              <ManageDestinations></ManageDestinations>
            </Route>
            <Route path="/myOrders">
              <MyOrders cart={cart}></MyOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
