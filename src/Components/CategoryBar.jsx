import React from 'react';
import blooming from '../Image/blooming.jpg';
import camo from '../Image/camo.jpg';
import candle from '../Image/candle.png';
import all from '../Image/logo-33.jpg';
import pair from '../Image/pair.jpg';
import santizer from '../Image/santizer.png';
import soap from '../Image/soap.png';
import { IsMobile } from '../Responsive';
import CategoryList from './CategoryList';

export default function CategoryBar({ selectedCategory, setSelectedCategory }) {
	const CategoryHandler = categoryName => {
		setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
	};

	const isPhone = IsMobile();

	return (
		<>
			{isPhone ? (
				<ul className="flex flex-row-reverse items-center justify-center">
					<section>
						<CategoryList
							onClick={() => {
								CategoryHandler('퍼퓸 비누');
							}}
							IMAGE={soap}
							ALT={'soap'}
							TEXT={'퍼퓸 비누'}
						/>
						<CategoryList
							onClick={() => {
								CategoryHandler('손 소독제');
							}}
							IMAGE={santizer}
							ALT={'santizer'}
							TEXT={'손 소독제'}
						/>{' '}
					</section>
					<section>
						<CategoryList
							onClick={() => {
								CategoryHandler('퍼퓸 밤');
							}}
							IMAGE={pair}
							ALT={'pair'}
							TEXT={'퍼퓸 밤'}
						/>
						<CategoryList
							onClick={() => {
								CategoryHandler('올팩티브 캔들');
							}}
							IMAGE={candle}
							ALT={'candle'}
							TEXT={'캔들'}
						/>{' '}
					</section>
					<section>
						<CategoryList
							onClick={() => {
								CategoryHandler('퍼퓸');
							}}
							IMAGE={camo}
							ALT={'camo'}
							TEXT={'퍼퓸'}
						/>
						<CategoryList
							onClick={() => {
								CategoryHandler('향 오브젝트');
							}}
							IMAGE={blooming}
							ALT={'blooming'}
							TEXT={'향 오브젝트'}
						/>{' '}
					</section>
					<section className="mr-5">
						<CategoryList
							onClick={() => {
								CategoryHandler(null);
							}}
							IMAGE={all}
							ALT={'LOGO'}
							TEXT={'전체보기'}
						/>
					</section>
				</ul>
			) : (
				<ul className="flex items-center justify-center mb-5 gap-x-2 mt-11">
					<CategoryList
						onClick={() => {
							CategoryHandler(null);
						}}
						IMAGE={all}
						ALT={'LOGO'}
						TEXT={'전체보기'}
					/>
					<CategoryList
						onClick={() => {
							CategoryHandler('퍼퓸');
						}}
						IMAGE={camo}
						ALT={'camo'}
						TEXT={'퍼퓸'}
					/>
					<CategoryList
						onClick={() => {
							CategoryHandler('퍼퓸 밤');
						}}
						IMAGE={pair}
						ALT={'pair'}
						TEXT={'퍼퓸 밤'}
					/>
					<CategoryList
						onClick={() => {
							CategoryHandler('올팩티브 캔들');
						}}
						IMAGE={candle}
						ALT={'candle'}
						TEXT={'올팩티브 캔들'}
					/>{' '}
					<CategoryList
						onClick={() => {
							CategoryHandler('손 소독제');
						}}
						IMAGE={santizer}
						ALT={'santizer'}
						TEXT={'손 소독제'}
					/>{' '}
					<CategoryList
						onClick={() => {
							CategoryHandler('향 오브젝트');
						}}
						IMAGE={blooming}
						ALT={'blooming'}
						TEXT={'향 오브젝트'}
					/>{' '}
					<CategoryList
						onClick={() => {
							CategoryHandler('퍼퓸 비누');
						}}
						IMAGE={soap}
						ALT={'soap'}
						TEXT={'퍼퓸 비누'}
					/>
				</ul>
			)}
		</>
	);
}
