import Button from "./Components/General/Button";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;