import { useState } from "react";
export const useFilters = (initialState) => {
  const [filters, setFilters] = useState(initialState);
  const handleChange = (e) => {
    setFilters((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  return [handleChange, filters];
};
