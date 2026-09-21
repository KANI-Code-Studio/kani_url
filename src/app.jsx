import { Footer, Navbar } from "./components";
import { Home, Privecy, Terms } from "./pages";
import { Router } from "preact-router";
const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Terms path='/terms'/>
        <Privecy path="/privacy"/>
        <Home path="/" />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
