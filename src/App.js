import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Register from "./pages/register";
import Home from "./pages/home";
import ProductList from "./pages/product-list";
import ProductDetail from "./pages/product-detail";
import OrderPlacedPage from "./pages/OrderPlaced";
import OrderFailedPage from "./pages/OrderFailed"

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/products' element={<ProductList />} />
            </Routes>

                    {/* <ProductDetail /> */}


        </div>
    );
}

export default App;
