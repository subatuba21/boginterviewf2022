import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { RandomUser } from "./pages/RandomUser";

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
        <Route path="/randomUser" element={<RandomUser/>}></Route>
        <Route path="*" element={<>404 Not found</>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
