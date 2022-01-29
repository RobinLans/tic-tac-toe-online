import logo from "./assets/logo.png";
import NameInput from "./components/NameInput";

function App() {
    return (
        <div className="bg-bg bg-cover font-gloria w-screen h-screen flex flex-col items-center">
            <img src={logo} alt="logo" className="h-52 mt-4 mb-32" />
            <NameInput />
        </div>
    );
}

export default App;
