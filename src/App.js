import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Insert from "./Insert";
import Display from "./Display";
import Delete from "./Delete";
import Update from "./Update";
import Search from "./Search";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="editrec/:id" element={<About />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
            <Route path="Delete" element={<Delete />} />
            <Route path="update" element={<Update />} />
            <Route path="search" element={<Search />} />
            <Route path="contact" element={<Contact />} />
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
