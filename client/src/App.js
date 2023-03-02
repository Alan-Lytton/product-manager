import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./view/Main";
import ProductDetails from "./components/ProductDetails";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/product"/>
            <Route element={<ProductDetails/>} path="/product/:id"/>
            <Route element={<Update/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
