import { useMediaQuery } from 'react-responsive';

// 데스크톱 화면 여부를 판단하는 함수
export const IsDesktopOrLaptop = () => {
	return useMediaQuery({ query: '(min-width: 1024px)' });
};

// 태블릿 또는 모바일 화면 여부를 판단하는 함수
export const IsTabletOrMobile = () => {
	return useMediaQuery({ query: '(max-width: 1023px)' });
};

export const IsMobile = () => {
	return useMediaQuery({ query: '(max-width:767px)' });
};
