import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import Dictation from "./pages/dictation/Dictation";
import Table from "./pages/table/Table";
import Pictures from "./pages/pictures/Pictures";
import Examination from "./pages/examination/Examination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="table" element={<Table />}></Route>
        <Route path="pictures" element={<Pictures />}></Route>
        <Route path="dictation" element={<Dictation />}></Route>
        <Route path="examination" element={<Examination />}></Route>
        <Route path="*" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
