import Button from "../button/Button";
import Cartitem from "../cart-item/Cartitem";
import "./cartdropdown.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router";

const Cartdropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <Cartitem key={item.id} cartItem={item} />
          ))}
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    </>
  );
};

export default Cartdropdown;
