import "./Navbar.scss";
import Logo from "./logo/Logo";
import DarkMode from "./buttons/DarkMode";
import Bars from "./buttons/Bars";

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navigations'>
					<a href='#' className='logo__link'>
						<Logo />
						<b className='logo-text'>Product</b>
					</a>
					<ul className='navlist'>
						<li className='navlist__items'>
							<a href='#' className='active navlist__items-link'>
								{"Product"}
							</a>
						</li>
						<li className='navlist__items'>
							<a href='#' className='navlist__items-link'>
								{"Customers"}
							</a>
						</li>
						<li className='navlist__items'>
							<a href='#' className='navlist__items-link'>
								{"Pricing"}
							</a>
						</li>
						<li className='navlist__items'>
							<a href='#' className='navlist__items-link'>
								{"Resources"}
							</a>
						</li>
					</ul>
					<div className='nav-btn'>
						<button className='signin'>Sign In</button>
						<button className='signup'>Sign Up</button>
					</div>
					<div className='widget__bar'>
						<DarkMode />
						<Bars />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
