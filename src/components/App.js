import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  const { currentUser } = useAuth();
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />

            {!currentUser ? (
              <>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}

            {currentUser ? (
              <>
                <Route exact path="/quiz" element={<Quiz />} />
                <Route exact path="/result" element={<Result />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
