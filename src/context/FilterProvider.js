import { createContext, useState } from "react";

export const FilterContext = createContext(null);

export default function FilterProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [totaldrugs, setTotalDrugs] = useState(0);
  //console.log(children);
  return (
    <FilterContext.Provider
      value={{
        categories,
        priceFilter,
        filterCategories,
        totaldrugs,
        setCategories,
        setPriceFilter,
        setFilterCategories,
        setTotalDrugs,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
