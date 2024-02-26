import { Wahid, Wahid2, Wahid3 } from "./Avatar";
import CleantImages from "./CleantImages";
import "./Cleants.scss";

function Cleants() {
	return (
		<section className='cleants'>
			<div className='container'>
				<div className='cleants__head'>
					<h3 className='cleants__heading'>What Clients Say</h3>
					<p className='cleants__paragriph'>
						Problems trying to resolve the conflict between the two major realms of Classical
						physics: Newtonian mechanics.
					</p>
				</div>
				<div className='cleants__body'>
					<div className='cleants__cards'>
						<CleantImages />
						<p>
							Product helps you see how many more days you need to work to reach your financial
							goal.
						</p>
						<Wahid />
					</div>
					<div className='cleants__cards'>
						<CleantImages />
						<p>
							Product helps you see how many more days you need to work to reach your financial
							goal.
						</p>
						<Wahid2 />
					</div>
					<div className='cleants__cards'>
						<CleantImages />
						<p>
							Product helps you see how many more days you need to work to reach your financial
							goal.
						</p>
						<Wahid3 />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cleants;
