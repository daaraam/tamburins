import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import flo1 from '../Image/flo-1.jpg';
import flo2 from '../Image/flo-2.jpg';
import flo3 from '../Image/flo-3.jpg';
import flo4 from '../Image/flo-4.jpg';
import home1 from '../Image/home-1.jpg';
import home2 from '../Image/home-2.jpg';
import home3 from '../Image/home-3.jpg';
import home4 from '../Image/home-4.jpg';

const SingleSlide = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		// 슬라이드 변경 시간
		speed: 2000,
		// 자동 재생 유지 시간
		autoplaySpeed: 4000,
		cssEase: 'linear',
		centerMode: false,
		slidesToShow: 2,
		slidesToScroll: 2,
	};

	return (
		<Container>
			<Slider {...settings}>
				<SlidePage padding={`10px 0`}>
					<img src={home1} alt="home-1" />
				</SlidePage>
				<SlidePage padding={`10px 0`}>
					<img src={flo1} alt="home-2" />
				</SlidePage>
				<SlidePage padding={`10px 0`}>
					<img src={home2} alt="home-3" />
				</SlidePage>
				<SlidePage padding={`10px 0`}>
					<img src={flo2} alt="home-4" />
				</SlidePage>
				<SlidePage padding={`10px 0`}>
					<img src={home3} alt="home-1" />
				</SlidePage>
				<SlidePage padding={`10px 0`}>
					<img src={flo3} alt="home-2" />
				</SlidePage>
				<SlidePage padding={`10px 0`}>
					<img src={home4} alt="home-3" />
				</SlidePage>
				<SlidePage padding={`10px 0`}>
					<img src={flo4} alt="home-4" />
				</SlidePage>
			</Slider>
		</Container>
	);
};

export default SingleSlide;

const Container = styled.div`
	padding: 0 5rem 5rem 5rem;
`;
const SlidePage = styled.div`
	height: max-content;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: green;
	width: 100%;
`;
