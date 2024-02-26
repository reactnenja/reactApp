import "./CardTable.scss";

function CardTable() {
	return (
		<section className='card__pirace'>
			<div className='container'>
				<div className='card__head-pr'>
					<h1>Price Table</h1>
					<p>We offer competitive price</p>
				</div>
				<div className='card__pirace-body'>
					<section className='table__card'>
						<h2 className='name__cards'>Free</h2>
						<span className='name__title'>Brief price description</span>
						<div className='table__card-body'>
							<h1>0</h1>
							<div className='head__pirace'>
								<b className='dollor'>$</b>
								<span className='text__tagtitle'>Per / month</span>
							</div>
						</div>
						<ol>
							<li>Only 2 Operators</li>
							<li>Notifications</li>
							<li>Landing Pages</li>
						</ol>
						<div className='table__foot'>
							<button>Order Now</button>
						</div>
					</section>
					<section className='table__card'>
						<h2 className='name__cards'>Standard</h2>
						<span className='name__title'>Brief price description</span>
						<div className='table__card-body'>
							<h1>5</h1>
							<div className='head__pirace'>
								<b className='dollor'>$</b>
								<span className='text__tagtitle'>Per / month</span>
							</div>
						</div>
						<ol>
							<li>5+ Operators</li>
							<li>Notifications</li>
							<li>Landing Pages</li>
						</ol>
						<div className='table__foot'>
							<button>Order Now</button>
						</div>
					</section>
					<section className='table__card'>
						<h2 className='name__card'>Premium</h2>
						<span className='name__title'>Brief price description</span>
						<div className='table__card-body'>
							<h1>10</h1>
							<div className='head__pirace'>
								<b className='dollor'>$</b>
								<span className='text__tagtitle'>Per / month</span>
							</div>
						</div>
						<ol>
							<li>10+ Operators</li>
							<li>Notifications</li>
							<li>Landing Pages</li>
						</ol>
						<div className='table__foot'>
							<button>Order Now</button>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}
export default CardTable;
