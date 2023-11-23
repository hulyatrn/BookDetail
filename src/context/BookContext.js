import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [query, setQuery] = useState("harry potter");
  const [books, setBooks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );

        if (response.data.items) {
          setBooks(response.data.items);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <BookContext.Provider
      value={{
        query,
        setQuery,
        books,
        totalPrice,
        setTotalPrice,
        cart,
        setCart,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
