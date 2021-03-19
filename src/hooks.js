import { useState } from "react";
export const useInput = (initialState) => {
  const [filters, setFilters] = useState(initialState);
  const handleChange = (e) => {
    setFilters((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  return [filters, handleChange];
};
