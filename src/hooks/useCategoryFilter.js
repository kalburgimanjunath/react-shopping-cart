import { PRODUCTS } from "../data/products";
import { useEffect, useState } from "react";
export default function useCategoryFilter() {
  const [CATEGORY, setCATEGORY] = useState([]);
  const allCategories = () =>
    new Set(
      PRODUCTS &&
        PRODUCTS.map((item) => {
          return item.type;
        }),
    );
  useEffect(() => {
    setCATEGORY(allCategories);
  }, []);
  return [...CATEGORY];
}
