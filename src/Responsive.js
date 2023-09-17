import { useMediaQuery } from 'react-responsive';

export const IsMobile = () => {
	return useMediaQuery({ query: '(max-width:767px)' });
};
