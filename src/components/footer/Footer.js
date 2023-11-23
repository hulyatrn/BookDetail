import React from "react";
import scss from "./footer.scss";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 m-0">
      <Link to="/">
        <div className="col mb-3">
          <img className="footer-logo" src={Logo} width={400} height={120} />
        </div>
      </Link>
      <div className="col mb-3">
        <h5>Kategoriler</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Çocuk Kitapları
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Edebiyat Kitapları
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Sağlık Kitapları
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Tarih Kitapları
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Yemek Kitapları
            </a>
          </li>
        </ul>
      </div>
      <div className="col mb-3">
        <h5>Önemli Bilgiler</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Teslimat Koşulları
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Üyelik Sözleşmesi
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Satış Sözleşmesi
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Garanti ve İade Koşulları
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Gizlilik ve Güvenlik
            </a>
          </li>
        </ul>
      </div>
      <div className="col mb-3">
        <h5>Hızlı Erişim</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Anasayfa
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              İletişim
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Yeni Çıkan Kitaplar
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              İndirimdekiler
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0">
              Sepetim
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
