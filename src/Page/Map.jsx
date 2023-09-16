import React from 'react';
import dosan from '../Image/도산.jpg';
import samchung from '../Image/삼청.jpg';
import sinsa from '../Image/신사.jpg';
import { IsMobile } from '../Responsive';

export default function Map() {
	const isPhone = IsMobile();
	return (
		<div>
			<section className="flex flex-col items-center pb-3 mt-5 gap-y-2">
				{isPhone ? (
					<img src={samchung} alt="samchung" />
				) : (
					<img src={samchung} alt="samchung" className="px-48" />
				)}

				<p className="font-bold py-9">플래그십스토어 삼청</p>
				<p>서울 종로구 율곡로3길 84</p>
				<p>+82 70 4222 7450</p>
				<p>월-일 11:00am-8:00pm</p>
				<p
					className="pt-5 underline pb-11"
					onClick={() =>
						window.open(
							'https://www.google.co.kr/maps/place/TAMBURINS+Flagship+Store+Samcheong/data=!3m1!4b1!4m6!3m5!1s0x357ca310873a0217:0x48767bcb989ef154!8m2!3d37.5793989!4d126.9822207!16s%2Fg%2F11khm926xj?entry=ttu',
							'_blank',
						)
					}
				>
					지도보기
				</p>
			</section>
			<section className="flex flex-col items-center pb-3 mt-5 gap-y-2">
				{isPhone ? <img src={dosan} alt="dosan" /> : <img src={dosan} alt="dosan" className="px-48" />}
				<p className="font-bold py-9">하우스 도산</p>
				<p>서울 강남구 압구정로46길 50</p>
				<p>+82 70 4128 2124</p>
				<p>월-일 11:00am-9:00pm</p>
				<p
					className="pt-5 underline pb-11"
					onClick={() =>
						window.open(
							'https://www.google.co.kr/maps/place/%ED%95%98%EC%9A%B0%EC%8A%A4%EB%8F%84%EC%82%B0+HAUS+DOSAN/@37.5253221,127.0334898,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3b907673741:0x5435f1f3bddb11da!8m2!3d37.5253221!4d127.0356785',
							'_blank',
						)
					}
				>
					지도보기
				</p>
			</section>{' '}
			<section className="flex flex-col items-center pb-3 mt-5 gap-y-2">
				{isPhone ? <img src={sinsa} alt="sinsa" /> : <img src={sinsa} alt="sinsa" className="px-48" />}
				<p className="font-bold py-9">플래그십스토어 신사</p>
				<p>서울 강남구 압구정로10길 44</p>
				<p>+82 02 511 1246</p>
				<p>월-일 12:00pm-9:00pm</p>
				<p
					className="pt-5 underline pb-11"
					onClick={() =>
						window.open(
							'https://www.google.com/maps/place/%ED%83%AC%EB%B2%84%EB%A6%B0%EC%A6%88+%ED%94%8C%EB%9E%98%EA%B7%B8%EC%8B%AD%EC%8A%A4%ED%86%A0%EC%96%B4+Tamburins/@37.5206052,127.0214472,19z/data=!3m1!4b1!4m5!3m4!1s0x357ca3eb0892eca7:0x317ff33e31a18c5a!8m2!3d37.5206052!4d127.0219944',
							'_blank',
						)
					}
				>
					지도보기
				</p>
			</section>
		</div>
	);
}
