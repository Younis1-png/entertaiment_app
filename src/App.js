// import "./App.css";
import Home from "./pages/Home";
import Movies from "./components/Movies";
import TvSeries from "./components/TvSeries";
import { Routes, Route, Link } from "react-router-dom";

import "./style.scss";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
        <Routes>
          <Route path="/tv-series" element={<TvSeries />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
