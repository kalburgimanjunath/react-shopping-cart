import { ProductList } from "../components";
export default function Cart() {
  return (
    <div>
      <div className="flex justify-end">
        <a href="./checkout" className="bg-blue-400 rounded-lg p-2">
          Checkout
        </a>
      </div>
      <ProductList isCart={true} />
    </div>
  );
}
