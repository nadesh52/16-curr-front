// if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());
import "./App.css";
import Eur from "./assets/currency/Eur";
import Hkd from "./assets/currency/Hkd";
import Jpy from "./assets/currency/Jpy";
import Sgd from "./assets/currency/Sgd";
import Usd from "./assets/currency/Usd";

function App() {
  return (
    <div className="container">
      <div className="title">THB</div>
      <div className="flex-row">
        <Usd />
        <Jpy />
        <Sgd />
        <Hkd />
        <Eur />
      </div>
    </div>
  );
}

export default App;
