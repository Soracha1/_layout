import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { fetchProducts } from "./data/products";

import Layout from "./layouts/Layout/Layout";

import Home from "./pages/Home/Home";
import Todo from "./pages/ToDo/Todo";
import Caiculator from "./pages/Calculator/Calculator";
import Components from "./pages/Components/Components";
import Animation from "./pages/Animation/Animation";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Login from "./pages/Login/Login";

const intTab = "home";
function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []);

  // useEffect(() => console.log(products), [products]);

  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(intTab);
  }, []);

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  tab={tab}
                  setTab={setTab}
                  products={products}
                  carts={carts}
                  setToken={setToken}
                />
              }
            >
              <Route path={"/"} element={<Home />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/calculator"} element={<Caiculator />} />
              <Route path={"/components"} element={<Components />} />
              <Route path={"/animation"} element={<Animation />} />
              <Route path={"/todo"} element={<Todo />} />
              <Route
                path={"/products"}
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path={"/carts"}
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
