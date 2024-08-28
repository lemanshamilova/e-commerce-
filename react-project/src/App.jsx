import Basket from "./pages/Basket";
import HomePage from "./pages/HomePage";
import Wishlist from "./pages/Wishlist";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageContainer from "./container/PageContainer";
import Detail from "./pages/Detail";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {  calculateAmount, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer,total } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(calculateAmount())
  }, [])
  


  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar />
      </PageContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/detail/:productId" element={<Detail />} />
      </Routes>
      <Drawer
        anchor="right"
        onClose={() => dispatch(setDrawer())}
        open={drawer}
      >
        {products &&
          products.map((product) => {
            return (
              <div key={product.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "80px", height: "80px" }}
                      src={product.image}
                    />

                    <div>
                      <p style={{ maxWidth: "300px" }}>{product.title}</p>
                      <p>
                        <span style={{ fontWeight: "700" }}>Count:</span>{" "}
                        {product.count}
                      </p>

                      <p>
                        <span style={{ fontWeight: "700", color: "red" }}>
                          Price:
                        </span>{" "}
                        {product.price * product.count}$
                      </p>
                    </div>
                  </div>

                  <button
                    style={{ border: "none" }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      
                      console.log(product.id);
                    }}
                  >
                    <DeleteIcon color="error" />
                  </button>
                </div>
              </div>
            );
          })}
        <h3>Total Price:{total}</h3>
      </Drawer>
    </BrowserRouter>
  );
}

export default App;
