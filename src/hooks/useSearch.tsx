import { useNavigate } from "react-router";
import { useShopStore } from "../redux/ShopReducer";
import { useState } from "react";
import { product } from "../data/product";

export type Product = {
  name: string;
  category: string;
  rating: string;
  wishlist: boolean;
  brand: string;
  currentPrice: string;
  initialPrice: string;
  color: string;
  type: string;
  image: string;
  fullCat: string;
  cat: string;
  discount: number;
}[];

const useSearch = (): {
  search: string;
  searchdata: Product;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleEnterSearch: (value: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: (value: string) => void;
} => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { updateItemName } = useShopStore();

  const searchdata = product
    .filter((data) => {
      const matchesSearch = data.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesSearch;
    })
    .splice(0, 10);

  const handleEnterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateItemName(search);
      setSearch("");
      navigate("shop");
    }
  };

  const handleSearch = (name: string) => {
    updateItemName(name);
    setSearch("");
    navigate("shop");
  };

  return { search, searchdata, setSearch, handleEnterSearch, handleSearch };
};

export default useSearch;
