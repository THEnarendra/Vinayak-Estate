import Navbar from "./Components/Header/Navbar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
	return (
		<BrowserRouter>
		 <Navbar/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/aboutus" element={<About/>}/>
			<Route path="/services" element={<Services/>}/>
		</Routes>
			<Footer/>
		</BrowserRouter>
		
	);
}

export default App;