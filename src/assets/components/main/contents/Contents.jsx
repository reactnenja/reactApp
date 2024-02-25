import "./Contents.scss";
import { ContentCards, ContentCards2, ContentCards3 } from "./content-cards/ContentCards";

function Contents() {
	return (
		<section className='contents'>
			<div className='container'>
				<h2 className='contents__heading'>Contents Strategies</h2>
				<p className='contents__paragriph'>
					We focus on ergonomics and meeting you where you work. It's only a keystroke away.{" "}
				</p>
				<div className='contents__group'>
					<div className='contents__card'>
						<div className='contents__head'>
							<ContentCards />
							<span>
								By<b>Wahid Ari</b>| 03 March 2019
							</span>
						</div>
						<div className='contents__body'>
							<a href='#' className='contents__link'>
								Increasing Prosperity With Positive Thinking
							</a>
						</div>
					</div>
					<div className='contents__card'>
						<div className='contents__head'>
							<ContentCards2 />
							<span>
								By<b>Wahid Ari</b>| 03 March 2019
							</span>
						</div>
						<div className='contents__body'>
							<a href='#' className='contents__link'>
								Motivation Is The First Step To Success
							</a>
						</div>
					</div>
					<div className='contents__card'>
						<div className='contents__head'>
							<ContentCards3 />
							<span>
								By<b>Wahid Ari</b>| 03 March 2019
							</span>
						</div>
						<div className='contents__body'>
							<a href='#' className='contents__link'>
								Success Steps For Your Personal Or Business
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contents;
