import "./Footer.scss";
import ImagesRight from "../../images/bg.svg";
function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__left'>
				<h4>Join 100 Compannies who boost their business with Product</h4>
				<button className='getStarted'>Get This</button>
			</div>
			<div className='footer__right'>
				<img src={ImagesRight} alt='images photo' />
			</div>
		</footer>
	);
}

export default Footer;
