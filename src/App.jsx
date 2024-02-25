import { useState } from "react";
import "./assets/sass/style.scss";
import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/main/Main.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	easing: "ease-out-quart",
	delay: 0,
	duration: 750,
});
function App() {
	return (
		<div>
			<Header />
			<Main />
		</div>
	);
}

export default App;
