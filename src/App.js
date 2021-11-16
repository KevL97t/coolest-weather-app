import Home from "./Pages/Home/Home";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Details from "./Pages/Details/Details";
import Error404 from "./Pages/Error404/Error404";

function App() {
  return (
   <div>
        <Router>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/details/:city/:temp/:icon/:feels_like/:temp_min/:temp_max/:pressure/:humidity" element={<Details />}/>
              <Route path="*" element={<Error404 />}/>
          </Routes>
        </Router>
   </div>
  );
}

export default App;
