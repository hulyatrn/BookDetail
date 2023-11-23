import React from "react";
import logo from "../../assets/img/logo.png";
import style from "./header.scss";
import { SlBasket } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { useBookContext } from "../../context/BookContext";
import { Button } from "@mantine/core";

export default function Header() {
  const { query, setQuery, books, totalPrice, setTotalPrice, cart, setCart } =
    useBookContext();

  const navigate = useNavigate();

  const handleBasketClick = (event) => {
    event.stopPropagation();

    if (books.length > 0 && books[0].volumeInfo) {
      const book = books[0];
      setCart((prevCart) => [...prevCart, book]);

      navigate("/sepet", { state: { selectedBook: book } });
    } else {
      console.error("hata");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg" aria-label="Third navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} width={300} height={100} />
        </a>
        <button
          className="navbar-toggler collapsed mt-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarsExample03">
          <ul className="navbar-nav m-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Kitap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dergi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kırtasiye
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Oyuncak
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Defter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Çanta
              </a>
            </li>
          </ul>
          <Button
            className="me-5"
            bg="#0000"
            style={{ border: "none" }}
            onClick={(event) => handleBasketClick(event, books)}
          >
            <SlBasket color="white" size={30} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
