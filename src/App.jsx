import { useState } from "react";
import "./assets/sass/style.scss";
import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/main/Main.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	easing: "ease-out-quart",
	delay: 0,
	duration: 150,
});
function App() {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
