import { useEffect, useState } from "react";

export const useFilter = (dataToFilter, searchValue) => {

  const [filteredItems, setFilteredItems] = useState("");
  const filteredByName = (itemsToSearch) => {
    return dataToFilter.filter((el) =>
      el.name.toLowerCase().includes(itemsToSearch.toLowerCase()));
  }

  useEffect(() => {
    if (searchValue) {
      setFilteredItems(filteredByName(searchValue))
    }
  }, [dataToFilter, searchValue]);

  return { filteredItems }
}