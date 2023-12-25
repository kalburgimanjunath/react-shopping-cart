import { ProductList } from "../components";
export default function Home() {
  return (
    <div>
      <div className="flex justify-between m-2 font-bold">
        <div>Product List</div>
        <div>Filter</div>
      </div>
      <ProductList />
    </div>
  );
}
