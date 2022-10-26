import "./App.scss";
import Main from "./page/Main/Main";
import Headers from "./component/Headers";
import Footer from "./component/Footer";
import Info from "./page/Info";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./page/ProjectPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
