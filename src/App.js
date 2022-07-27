import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
