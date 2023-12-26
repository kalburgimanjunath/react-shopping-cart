import { PRODUCTS } from "../data/products";
import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../store/redux/CounterSlice";
import { addIncart, removeFromcart } from "../store/redux/CartSlice";

const ProductBlub = () => {
  const dispatch = useDispatch();
  return (
    PRODUCTS &&
    PRODUCTS.map((item) => {
      const newImage = require("./../assets/images/" + item.filename);
      return (
        <div
          className="bg-gray-100 m-2 hover:bg-gray-200 hover:text-blue hover:cursor-pointer"
          key={item.title}
        >
          <div>
            <img
              width="200"
              height="200"
              src={newImage}
              // src="https://picsum.photos/seed/picsum/200/300"
            />
          </div>
          <div className="pt-2">
            <div className="font-bold">{item.title}</div>
            <div>{item.description}</div>
            <div>Price:{item.price}</div>
            <div>{item.discount}% OFF</div>
            <button
              onClick={() => dispatch(addIncart(item))}
              className="hover:text-blue hover:font-bold bg-blue-300 rounded-lg p-2 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
    })
  );
};
const CartBlub = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    cart &&
    cart.map((item) => {
      const newImage = require("./../assets/images/" + item.filename);
      return (
        <div
          className="bg-gray-100 m-2 hover:bg-gray-200 hover:text-blue hover:cursor-pointer"
          key={item.title}
        >
          <div>
            <img
              width="200"
              height="200"
              src={newImage}
              // src="https://picsum.photos/seed/picsum/200/300"
            />
          </div>
          <div className="pt-2">
            <div className="font-bold">{item.title}</div>
            <div>{item.description}</div>
            <div>Price:{item.price}</div>
            <div>{item.discount}% OFF</div>

            <button
              onClick={() => dispatch(removeFromcart(item))}
              className="hover:text-blue hover:font-bold bg-blue-300 rounded-lg p-2 "
            >
              Remove
            </button>
          </div>
        </div>
      );
    })
  );
};

export default function ProductList({ isCart }) {
  // const count = useSelector((state) => state.counter.value);
  const cart = useSelector((state) => state.cart);
  return (
    <div className="productlist grid grid-cols-3 md:grid-cols-2 bg-white text-center rounded-lg">
      {/* Count:{count} */}
      {isCart}
      {cart && cart.length > 0 && isCart ? (
        <CartBlub cart={cart} />
      ) : cart && cart.length < 0 ? (
        "cart is empty"
      ) : (
        <ProductBlub />
      )}
      {/* {cart && cart.length < 0 ? "Cart is empty" : <ProductBlub />} */}
    </div>
  );
}
