import Navbar from "./navbar/Navbar";
import Hero from "../hero/Hero";
import "./Header.scss";
import MobileNavs from "./navbar/MobileNav";

function Header() {
	return (
		<header className='header'>
			<Navbar />
			<MobileNavs />
			<div className='container'>
				<Hero />
			</div>
		</header>
	);
}

export default Header;
