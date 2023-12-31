import { ProductList } from "../components";
import { PRODUCTS } from "../data/products";
// import React, { useEffect, useState } from "react";
import useCategoryFilter from "../hooks/useCategoryFilter";
export default function Books() {
  const CATEGORY = useCategoryFilter();
  return (
    <div>
      <div className="flex justify-arround text-wrap">
        {CATEGORY &&
          CATEGORY.length > 0 &&
          CATEGORY.map((item) => {
            return (
              <div
                key={item}
                className="rounded p-1 m-1 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer"
              >
                {item.toUpperCase()}
              </div>
            );
          })}
      </div>
      <ProductList isCart={false} products={PRODUCTS} />
    </div>
  );
}
