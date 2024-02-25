import React, { useEffect } from "react";
import "./DarkMode.scss";
import LightDark from "./LightDark";

const DarkMode = () => {
	useEffect(() => {
		const mode = document.querySelector(".darkmode");
		mode.addEventListener("click", () => {
			document.body.classList.toggle("dark");
		});

		return () => {
			mode.removeEventListener("click", () => {
				document.body.classList.toggle("dark");
			});
		};
	}, []);

	return (
		<button className='darkmode'>
			<LightDark />
		</button>
	);
};

export default DarkMode;
