import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Books from "./pages/books/Books";
import { MantineProvider } from "@mantine/core";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Basket from "./pages/basket/Basket";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BookProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kitap/:id" element={<Books />} />
              <Route path="/sepet" element={<Basket />} />
              <Route path="/ödeme" element={<Payment />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </BookProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
