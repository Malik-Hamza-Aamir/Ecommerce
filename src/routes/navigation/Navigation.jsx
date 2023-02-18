import { Link, Outlet } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import { CartContext } from "../../contexts/cart.context";
import Carticon from "../../components/cart-icon/Carticon";
import Cartdropdown from "../../components/cart-dropdown/Cartdropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="navlinks-container">
          <Link className="navlink" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="navlink">SIGN OUT</span>
          ) : (
            <Link className="navlink" to="/auth">
              SIGN IN
            </Link>
          )}
          <Carticon />
        </div>
        {isCartOpen && <Cartdropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
