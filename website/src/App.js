import "./App.css";
import { ModalS } from "./common/ModalStyled";
import Destinations from "./components/Destinations/Destinations";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Destinations />
      <Footer />
    </div>
  );
}

export default App;
