import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home";
import About from "./About";
import Careers from "./Careers";
import Location from "./Location";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Layout>
  );
}

export default App;
