import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    );
};

export default App;
