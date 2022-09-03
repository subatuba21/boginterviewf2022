import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>Hello</>
          }
        />
        <Route path="*" element={<>404 Not found</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
