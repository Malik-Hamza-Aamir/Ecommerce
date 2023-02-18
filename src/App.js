import { Route, Routes } from "react-router";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/Checkout";

const App = () => {
  // instead of hard coding we make an array to tackle changes
  return (
    <>
      <Routes>
        <Route path="/" element={ <Navigation /> }>
            <Route index element={ <Home /> } />
            <Route path="shop" element={ <Shop /> } />
            <Route path="auth" element={ <Authentication /> } />
            <Route path="checkout" element={ <Checkout /> } />
        </Route>
      </Routes>
    </>
  );
};

export default App;
