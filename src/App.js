import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductPage from "./components/pages/ProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/products" exact component={ProductsPage} />
                <Route path="/product/:productId" component={ProductPage} />
                {/* Diving deeper: product category filter */}
                {/* <Route path="/products/:category" component={ProductsPage} /> */}
            </Switch>
        </Router>
    );
}

export default App;
