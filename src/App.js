import Logo from "./components/header/Logo"
import Navbar from "./components/header/Navbar";
import Product from "./components/Main/Product";
import Feetback from "./components/Main/Feetback";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  let isMale = true;
  return (
    <>
      <header class="class-padding">
        <Logo />
        <Navbar/>
      </header>
      <main class="class-padding">
        <Product></Product>
        <Feetback></Feetback>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default App;
