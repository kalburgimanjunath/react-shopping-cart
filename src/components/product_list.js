export default function ProductList() {
  const productlist = [
    {
      id: 1,
      title: "product",
      description: "description",
      price: 10200,
      discount: 20,
    },
    {
      id: 2,
      title: "product2",
      description: "description",
      price: 10200,
      discount: 20,
    },
    {
      id: 3,
      title: "product3",
      description: "description",
      price: 10200,
      discount: 20,
    },
    {
      id: 4,
      title: "product4",
      description: "description",
      price: 10200,
      discount: 20,
    },
  ];
  return (
    <div className="productlist grid grid-cols-3 bg-white text-center">
      {productlist &&
        productlist.map((item) => {
          return (
            <div
              className="bg-gray-100 m-2 hover:bg-gray-200 hover:text-blue hover:cursor-pointer"
              key={item.title}
            >
              <div>
                <img
                  width="200"
                  height="200"
                  src="https://picsum.photos/seed/picsum/200/300"
                />
              </div>
              <div className="pt-2">
                <div className="font-bold">{item.title}</div>
                <div>{item.description}</div>
                <div>{item.price}</div>
                <div>{item.discount}</div>
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
