import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import NameInput from "./components/NameInput";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <div className="bg-bg bg-cover font-gloria w-screen h-screen flex flex-col items-center">
      <img src={logo} alt="logo" className="h-40 mt-4 mb-20" />
      <Routes>
        <Route path="/" element={<NameInput />} />
        <Route path="/menu" element={<MainMenu />} />
      </Routes>
    </div>
  );
}

export default App;
