import "./Footer.scss";
import ImagesRight from "../../images/bg.svg";
function Footer() {
	return (
		<footer className='footer' data-aos='zoom-out'>
			<div className='footer__left' data-aos='zoom-in-right'>
				<h4>Join 100 Compannies who boost their business with Product</h4>
				<button className='getStarted'>Get This</button>
			</div>
			<div className='footer__right' data-aos='zoom-in-left'>
				<img src={ImagesRight} alt='images photo' />
			</div>
		</footer>
	);
}

export default Footer;
