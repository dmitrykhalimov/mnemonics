import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import Dictation from "./pages/dictation/Dictation";
import Numbers from "./pages/numbers/Numbers";
import Pictures from "./pages/pictures/Pictures";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="numbers" element={<Numbers />}></Route>
        <Route path="pictures" element={<Pictures />}></Route>
        <Route path="dictation" element={<Dictation />}></Route>
        <Route path="*" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
