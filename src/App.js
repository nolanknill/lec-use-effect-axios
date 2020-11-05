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
                <Route path="/products" component={ProductsPage} />
                <Route path="/product/:productId" component={ProductPage} />
            </Switch>
        </Router>
    );
}

export default App;
