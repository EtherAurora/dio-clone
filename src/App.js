import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { GlobalStyles } from './styles/global';
import { SignIn } from "./pages/sign-in";

function App() {
  return (
    <Router>
     <GlobalStyles />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
     </Routes >
    </Router>
  );
}

export default App;
