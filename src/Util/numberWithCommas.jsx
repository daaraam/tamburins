export const numberWithCommas = price => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
};
