import React, { useState } from "react";
import { useBookContext } from "../../context/BookContext";
import { Text, Button, Input } from "@mantine/core";
import scss from "./home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { query, setQuery, books, totalPrice, setTotalPrice, cart, setCart } =
    useBookContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [basketbtn, setBasketbtn] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const handleBookClick = (bookId) => {
    navigate(`/kitap/${bookId}`);
  };

  const handleBasketClick = (event, book) => {
    event.stopPropagation();

    if (book && book.volumeInfo) {
      setCart((prevCart) => [...prevCart, book]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + 200);
      setBasketbtn((prevAddedBooks) => [...prevAddedBooks, book.id]);

      const updatedTotalPrice = totalPrice + 200;
      navigate("/sepet", {
        state: { totalPrice: updatedTotalPrice, selectedBook: book },
      });
    } else {
      console.error("hata");
    }
  };

  return (
    <div>
      <div className="home-slider">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2 className="highlights-title">Öne Çıkan Kitaplar</h2>
          </div>
          <div
            className="search-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
            }}
          >
            <Input
              className="search-input"
              placeholder="Kitap adı veya yazar ara..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <CiSearch className="search-icon me-2" color="black" size={25} />
          </div>
        </div>
        <Slider {...settings}>
          {books
            .filter((book) => {
              const title = book.volumeInfo.title.toLowerCase();
              const authors = book.volumeInfo.authors.join(" ").toLowerCase();
              const search = searchTerm.toLowerCase();

              return (
                (title.includes(search) || authors.includes(search)) &&
                book.volumeInfo.imageLinks
              );
            })
            .map((book) => (
              <div
                className="home-slider-div"
                key={book.id}
                onClick={() => handleBookClick(book.id)}
              >
                <img
                  style={{ margin: "auto" }}
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={`${book.volumeInfo.title}`}
                />
                <Text className="book-title" ta="center">
                  {book.volumeInfo.title.substring(0, 38)}
                </Text>
                <Text className="authors-title" ta="center">
                  {book.volumeInfo.authors}
                </Text>
                <div>
                  <Text className="price-title" ta="center">
                    200 TL
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className="basket-btn"
                    onClick={(event) => handleBasketClick(event, book)}
                  >
                    {basketbtn.includes(book.id) ? (
                      <div>
                        <Text className="basket-btn-title-add">
                          Sepete Eklendi
                        </Text>
                      </div>
                    ) : (
                      <div>
                        <Text className="basket-btn-title">Sepete Ekle</Text>
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
