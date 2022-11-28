import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StaffLoginForm from "./components/Portal/StaffLoginForm";
import StudentLoginForm from "./components/Portal/StudentLoginForm";
import Example from "./examples/example";
import Register from "./examples/Register";
import Portal from "./pages/Application/Portal";
import DashboardHome from "./pages/Dashboard/DashboardHome";
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
          <Route path="/example" element={<Example />} />

          {/* Student and Staff Login portal */}
          <Route path="/portal" element={<Portal />} >
            <Route index element={<StudentLoginForm />} />
            <Route path="staff" element={<StaffLoginForm />} />
          </Route>

          {/* Student Dashboard */}
          <Route path="/dashboard" element={<DashboardHome />}>
            <Route path="" element={`this is the home`} />
            <Route path="check-results" element={`this is the chack results`} />
            <Route path="pay-school-fees" element={`this is the reports`} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
