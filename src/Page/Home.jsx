import React from 'react';
import home from '../Image/flo-4.jpg';
import home2 from '../Image/home-2.jpg';
import home3 from '../Image/home-3.jpg';
import { IsMobile } from '../Responsive';
import SingleSlide from './SingleSlide';

export default function Home() {
	const isPhone = IsMobile();
	return (
		<div>
			{isPhone ? (
				<div>
					<img src={home} alt="홈" />
					<img src={home2} alt="홈" />
					<img src={home3} alt="홈" />
				</div>
			) : (
				<SingleSlide />
			)}
		</div>
	);
}
