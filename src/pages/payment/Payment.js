import { Button, Text } from "@mantine/core";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import scss from "./payment.scss";
import Swal from "sweetalert2";

export default function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [cvv, setCvv] = useState("");

  const location = useLocation();
  const { totalAmount } = location.state || {};

  const handleCardNumberChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, "");
    inputValue = inputValue.substring(0, 16);

    const formattedCardNumber = inputValue.replace(/(\d{4})/g, "$1 ").trim();

    setCardNumber(formattedCardNumber);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

  const handleCvvChange = (event) => {
    const newCvv = event.target.value.replace(/\D/g, "");

    if (newCvv.length <= 3) {
      setCvv(newCvv);
    }
  };

  function showSuccessMessage() {
    Swal.fire({
      icon: "success",
      title: "İşlem Başarılı!",
      text: "İşleminiz başarıyla tamamlandı.",
      confirmButtonText: "Tamam",
    });
  }

  const handleConfirm = () => {
    if (cardNumber.trim() === "" || selectedMonth === "" || cvv.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Hata!",
        text: "Lütfen tüm form alanlarını doldurun.",
        confirmButtonText: "Tamam",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "İşlem Başarılı!",
        text: "Ödeme işleminiz başarıyla tamamlandı.",
        confirmButtonText: "Tamam",
      });
    }
  };

  return (
    <div className="p-5">
      <div
        className="container text-center card-detail-div"
        style={{ padding: "100px", border: "1px solid #3a3737" }}
      >
        <div className="row card-details-body">
          <div className="col-6 total-div">
            <Text
              className="total-text"
              style={{ color: "white", fontSize: "24px", marginTop: "150px" }}
            >
              {" "}
              Toplam Fiyatınız:
              <span style={{ fontSize: "26px", fontWeight: "bold" }}>
                {" "}
                {totalAmount}
              </span>{" "}
              TL
            </Text>
          </div>
          <div className="col-6 card-detail">
            <Text style={{ color: "white", fontSize: "20px" }} ta="left">
              Kart Bilgileri
            </Text>
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <label
                style={{
                  color: "#cbcbcb",
                  marginRight: "25px",
                  fontSize: "20px",
                }}
              >
                Kart Numarası:
              </label>
              <input
                className="card-number"
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength="19"
                placeholder="**** **** **** ****"
              />
            </div>
            <div
              className="card-details"
              style={{ textAlign: "left", marginBottom: "20px" }}
            >
              <label
                style={{
                  color: "#cbcbcb",
                  marginRight: "25px",
                  fontSize: "20px",
                }}
              >
                Son Kullanma Tarihi
              </label>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <select
                  className="cardmonth"
                  id="cardMonth"
                  name="cardMonth"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                  <option value="" disabled>
                    Ay
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="01">04</option>
                  <option value="02">05</option>
                  <option value="03">06</option>
                  <option value="01">07</option>
                  <option value="02">08</option>
                  <option value="03">09</option>
                  <option value="01">10</option>
                  <option value="02">11</option>
                  <option value="03">12</option>
                </select>
                <select id="year" className="cardyear">
                  <option disabled defaultValue>
                    Yıl
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <label
                style={{
                  color: "#cbcbcb",
                  marginRight: "25px",
                  fontSize: "20px",
                }}
              >
                CVV
              </label>
              <input
                className="cvv-input"
                placeholder="CVV"
                value={cvv}
                onChange={handleCvvChange}
                pattern="\d{3}"
              />
            </div>
            <Button
              className="confirm-cart-btn"
              w={"100%"}
              onClick={handleConfirm}
            >
              Sepeti Onayla
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
