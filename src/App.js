// CSS File
import "./assets/css/style.css";

// impoer react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Components
import Home from "./components/Home";
import Men from "./components/Men";
import Indie from "./components/Indie";
import Women from "./components/Women";
import Kids from "./components/Kids";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/indie" element={<Indie />} />
      </Routes>
    </BrowserRouter>
  </>
);
export default App;
