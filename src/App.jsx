import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PlayLists from "./pages/PlayLists/PlayLists";
import Singles from "./pages/Singles/Singles";
import Albums from "./pages/Albums/Albums";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlayLists" element={<PlayLists />} />
        <Route path="/Singles" element={<Singles />} />
        <Route path="/Albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
