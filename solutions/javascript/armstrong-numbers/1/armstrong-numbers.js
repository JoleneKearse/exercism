export const isArmstrongNumber = (num) => {
	if (num < 10) return true;

	const numStr = num.toString();
	const raiseTo = numStr.length;

	if (raiseTo === 2) return false;

	const sum = numStr.split("").reduce((acc, curr) => {
		acc += Math.pow(parseInt(curr), raiseTo);
		return acc;
	}, 0);

	return num === sum;
};