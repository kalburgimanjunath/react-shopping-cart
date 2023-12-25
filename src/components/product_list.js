import { PRODUCTS } from "../data/products";
export default function ProductList() {
  return (
    <div className="productlist grid grid-cols-3 bg-white text-center">
      {PRODUCTS &&
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
                <button className="hover:text-blue hover:font-bold bg-blue-300 rounded-lg p-2 ">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
