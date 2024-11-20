import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./Cart.css";
import { emptySong, removeSong } from "../redux/action";
const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  
  const amount=cartData.length&&cartData.map((item)=>item.price).reduce((prev,next)=>prev+next);
console.warn("Amount",amount);

const dispatch =useDispatch();
const AudioSong={
  name:"song"
}
  return (
    
    <div>
      <br></br>
              <button onClick={() => dispatch(emptySong(AudioSong))}>Empty Song</button>

              <div className="container">
      <div className="cart-page-container">
        <table className="">

          <tr>
            <td>Name</td>
            <td>Artist</td>
          </tr>
          {cartData.map((item) => (
            
            <tr key={item.key}>

              <td>{item.name}</td>
              <td>{item.artist}</td>
              <td> <button onClick={() => dispatch(removeSong(item.id))}>Delete Song</button>
              </td>
            </tr>
          ))}
        </table>
       
      </div>

</div>
      <br/>
    </div>
  );
};
export default Cart;
