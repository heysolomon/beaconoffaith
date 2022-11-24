import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./examples/Dashexa";
import Register from "./examples/Register";
import Home from "./pages/Home/Home";

function App() {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/637aaa9bdaff0e1306d877b8/1gibiksra";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Example />} >
            <Route path="" element={`this is the home`} />
            <Route path="team" element={`this is the teams`} />
            <Route path="projects" element={`this is the projects`} />
            <Route path="check-results" element={`this is the chack results`} />
            <Route path="reports" element={`this is the reports`} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
