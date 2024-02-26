import "./Product.scss";
import icons1 from "../../../images/p_icons-1.svg";
import icons2 from "../../../images/p_icons-2.svg";
import icons3 from "../../../images/p_icons-3.svg";
import icons4 from "../../../images/p_icons-4.svg";
import Buttons from "./Buttons";

function Product() {
	return (
		<section className='product'>
			<div className='container'>
				<h2 className='product__heading' data-aos='zoom-in'>
					Product was Built Specifically for You
				</h2>
				<div className='product__group'>
					<div className='product__cards' data-aos='zoom-in-up'>
						<img src={icons1} alt='card__icons' />
						<h4 className='card__pro-heading'>First click tests</h4>
						<p className='card__pro-paragriph'>While most people enjoy casino gambling,</p>
					</div>
					<div className='product__cards' data-aos='zoom-in-up'>
						<img src={icons2} alt='card__icons' />
						<h4 className='card__pro-heading'>Design surveys</h4>
						<p className='card__pro-paragriph'>
							Sports betting, lottery and bingo playing for the fun
						</p>
					</div>
					<div className='product__cards' data-aos='zoom-in-up'>
						<img src={icons3} alt='card__icons' />
						<h4 className='card__pro-heading'>Preference tests</h4>
						<p className='card__pro-paragriph'>The Myspace page defines the individual.</p>
					</div>
					<div className='product__cards' data-aos='zoom-in-up'>
						<img src={icons4} alt='card__icons' />
						<h4 className='card__pro-heading'>Five second tests</h4>
						<p className='card__pro-paragriph'>
							Personal choices and the overall personality of the person.{" "}
						</p>
					</div>
				</div>
				<div className='sign__sections'>
					<Buttons />
				</div>
			</div>
		</section>
	);
}

export default Product;
