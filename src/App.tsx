// Dependencias
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";

// Types & Configs
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
