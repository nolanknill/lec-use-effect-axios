import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";
import ProductsPage from "./components/pages/ProductsPage";

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <ContactPage />
            <ProductsPage />
        </div>
    );
}

export default App;
