import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";
import Inicial from "./components/Inicial/Inicial";

function App() {
  return (
    <div>
      <Navbar />
      <Inicial/>
      
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
