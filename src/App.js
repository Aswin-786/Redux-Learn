import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Product from './components/Product';
import { Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Product />} />
        <Route path={"/cart"} element={<Cart />} />

      </Route>
    </Routes>
  );
}

export default App;
