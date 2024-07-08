import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
import { lazy,Suspense } from "react";
const Home=lazy(()=>import("./Home"));
const About=lazy(()=>import("./About"));
const Contact=lazy(()=>import("./Contact"));

//*lazy is used to split the code for hreavy applications
function App() {
  return (
   <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
