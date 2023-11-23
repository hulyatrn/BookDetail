import React from "react";
import { useBookContext } from "../../context/BookContext";
import { useParams } from "react-router-dom";
import { Text, Button } from "@mantine/core";
import scss from "./books.scss";

export default function Books() {
  const { books } = useBookContext();
  console.log("kitap", books);
  const { id } = useParams();

  const selectedBookDetail = books.find((book) => book.id === id);

  if (!selectedBookDetail) {
  }

  return (
    <div className="books-detail-section">
      <div className="book-detail-container text-center">
        <div className="row card-detail">
          <div className="col-3 mb-3 mb-sm-0 book-detail">
            <div className="card">
              <div className="card-body-books-img">
                <img src={selectedBookDetail.volumeInfo.imageLinks.thumbnail} />
              </div>
            </div>
          </div>
          <div className="col-9 books-detail">
            <div className="cards">
              <div className="card-books-detail">
                <Text
                  className="bookdetail-title"
                  fw={900}
                  ta="left"
                  style={{ color: "#555", fontSize: "36px" }}
                >
                  {selectedBookDetail.volumeInfo.title}
                </Text>
                <Text
                  className="authors"
                  style={{ color: "#555", fontSize: "20px" }}
                  ta="left"
                >
                  Yazar: {selectedBookDetail.volumeInfo.authors}
                </Text>
                <Text
                  className="description-text"
                  style={{ color: "#77777", fontSize: "16px" }}
                  ta="left"
                >
                  {selectedBookDetail.volumeInfo.description}
                </Text>
                <div>
                  <Text
                    className="books-about"
                    style={{ color: "#555", fontSize: "18px" }}
                    m={0}
                    ta="left"
                  >
                    Yayımcı:{" "}
                    <span style={{ fontSize: "16px" }}>
                      {selectedBookDetail.volumeInfo.publisher}
                    </span>
                  </Text>
                  <Text
                    className="books-about"
                    style={{ color: "#555", fontSize: "18px" }}
                    m={0}
                    ta="left"
                  >
                    Yayınlanma tarihi:{" "}
                    <span style={{ fontSize: "16px" }}>
                      {selectedBookDetail.volumeInfo.publishedDate}
                    </span>
                  </Text>
                  <Text
                    className="books-about"
                    style={{ color: "#555", fontSize: "18px" }}
                    m={0}
                    ta="left"
                  >
                    Dil:{" "}
                    <span style={{ fontSize: "16px" }}>
                      {selectedBookDetail.saleInfo.country}
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
