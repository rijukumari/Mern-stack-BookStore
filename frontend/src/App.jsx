import Banner from "./components/Banner";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Course from "./components/Course";
import Courses from "./courses/Courses";
import Singup from "./components/Singup";
import BuyPage from "./components/Buypage";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contacts from "./contacts/contacts";
import Abouts from "./Abouts/Abouts";

function App() {
  const { authUser } = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/singup" replace />}
        />

        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
