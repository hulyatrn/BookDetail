import React, { useEffect, useState } from "react";
import scss from "./basket.scss";
import { Text, Button } from "@mantine/core";
import { useBookContext } from "../../context/BookContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Basket() {
  const { totalPrice, books } = useBookContext();
  console.log("fiyat", totalPrice);

  const location = useLocation();
  const selectedBook = location.state.selectedBook;
  const setTotalPrice = location.state.setTotalPrice;
  const [count, setCount] = useState(1);
  const [totalPricee, setTotalPricee] = useState(0);
  const [cargototal, setCargoTotal] = useState(20);
  const [totalAmount, setTotalAmount] = useState();

  const navigate = useNavigate();

  const handleConfirmCart = () => {
    navigate("/ödeme", {
      state: {
        totalPricee,
        cargototal,
        totalAmount,
      },
    });
  };

  useEffect(() => {
    setTotalPricee(totalPrice * count);
  }, [totalPrice, count]);

  useEffect(() => {
    setTotalAmount(totalPricee + cargototal);
  }, [totalPricee, cargototal]);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="basket-section p-5">
      <h2 style={{ color: "white", marginBottom: "30px", fontSize: "24px" }}>
        Sepetim {count} Ürün
      </h2>
      {selectedBook ? (
        <div className="row basket-div">
          <div className="col-9 basket-div-item">
            <div className="basket-item-wrapper p-0">
              <div className="merchant">
                <Text style={{ color: "#999999", fontSize: "14px" }}>
                  Satıcı:{" "}
                  <span style={{ color: "#333", fontSize: "14px" }}>
                    Kitap Sepetim Yayınevi
                  </span>
                </Text>
              </div>
              <div
                className="basket-item p-3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <img src={selectedBook.volumeInfo.imageLinks.thumbnail} />
                </div>
                <div>
                  <Text fz={14} fw="bold" style={{ color: "#333" }}>
                    {selectedBook.volumeInfo.publisher} Yayımları{" "}
                    <span style={{ fontWeight: "normal", fontSize: "14px" }}>
                      {selectedBook.volumeInfo.title}
                    </span>
                  </Text>
                  <div className="cargo-delivery">
                    <Text style={{ color: "#666", fontSize: "12px" }} mb={0}>
                      Tahmini Kargoya Teslim: 2 gün içinde
                    </Text>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    className="numaric-counter-left"
                    onClick={incrementCounter}
                  >
                    +
                  </button>
                  <Text className="counter-content" m={0}>
                    {count}
                  </Text>
                  <button
                    className="numaric-counter-right"
                    onClick={decrementCounter}
                  >
                    -
                  </button>
                </div>
                <div>
                  <Text className="price-title" mb={0}>
                    {totalPricee}TL
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 basket-div-items">
            <div className="summary-box">
              <div className="summary-box-prices">
                <Text fw="bold" style={{ color: "#333", fontSize: "22px" }}>
                  Sipariş Özeti
                </Text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#333", fontSize: "14px" }} mb={0}>
                    Ürünün Toplamı
                  </Text>
                  <Text
                    style={{ color: "#333", fontSize: "16px" }}
                    fw="bold"
                    mb={0}
                  >
                    {totalPricee} TL
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#333", fontSize: "14px" }}>
                    Kargo Toplamı
                  </Text>
                  <Text style={{ color: "#333", fontSize: "16px" }} fw="bold">
                    {cargototal} TL
                  </Text>
                </div>
                <div className="p-2">
                  <hr className="m-0"></hr>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "#333", fontSize: "16px" }}>
                    Toplam:
                  </Text>
                  <Text style={{ color: "#333", fontSize: "20px" }} fw="bold">
                    {totalAmount}
                  </Text>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button className="confirm-cart-btn" onClick={handleConfirmCart}>
                Sepeti Onayla <FaChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>Sepetiniz Boş</>
      )}
    </div>
  );
}
