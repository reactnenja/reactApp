import "./MobileNav.scss";

function MobileNavs() {
	return (
		<div className='menu'>
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
		</div>
	);
}

export default MobileNavs;
