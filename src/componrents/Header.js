import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import pic from "../asset/cart.avif";
import "./Header.css";
const Header = () => {
  const result = useSelector((state) => state.cartData); 

  console.warn("data in header", result);
  return (
    <div className="header">
        <Link to="/">  
              <h1 className="ecom">Song Player</h1>
        </Link>
      
      <Link to="/cart">                          
        <span className="cart-div">
        {result.length +` Songs Created `}
        </span>
      </Link>
    </div>
  );
};
export default Header;
