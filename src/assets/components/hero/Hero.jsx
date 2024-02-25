import "./Hero.scss";
import HeroImages from "./HeroImages";

function Hero() {
	return (
		<section className='flex__menu'>
			<div className='left__content' data-aos='fade-right'>
				<h1 className='heading__content'>Work at the speed of thought</h1>
				<p className='paragriph__content'>
					Tools, tutorials, design and innovation experts, all in one place! The most intuitive way
					to imagine your next user experience.
				</p>
				<div className='hero__btn'>
					<button className='btn btn__started'>Get started</button>
					<button className='btn btn__watch'>
						<i className='fa-solid fa-play'></i>
						&nbsp; &nbsp;
						<u>Watch the Video</u>
					</button>
				</div>
			</div>
			<div className='right__content' data-aos='fade-up' data-aos-duration='1000'>
				<HeroImages />
			</div>
		</section>
	);
}

export default Hero;
