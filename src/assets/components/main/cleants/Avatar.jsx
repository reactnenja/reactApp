import WahidImg from "../../../images/wahid.png";
import WahidImages from "../../../images/wahid-2.png";
import WahidImgs from "../../../images/wahid-3.png";

export function Wahid() {
	return (
		<div className='avatar__foot'>
			<img src={WahidImg} alt='Designer' />
			<div className='avatar__content'>
				<h4>Wahid Ari</h4>
				<b>Designer</b>
			</div>
		</div>
	);
}
export function Wahid2() {
	return (
		<div className='avatar__foot'>
			<img src={WahidImages} alt='Designer' />
			<div className='avatar__content'>
				<h4>Wahid Ari</h4>
				<b>Designer</b>
			</div>
		</div>
	);
}
export function Wahid3() {
	return (
		<div className='avatar__foot'>
			<img src={WahidImgs} alt='Designer' />
			<div className='avatar__content'>
				<h4>Wahid Ari</h4>
				<b>Designer</b>
			</div>
		</div>
	);
}
