type TsplitBill = {[key: string]: number}

const splitBill = (bill: TsplitBill): any => {
	
	const amountSpent = Object.values(bill);
	const averageSpent = amountSpent.reduce((a, b) => a + b) / amountSpent.length;

	const result: TsplitBill = {};

	for (const person in bill) {

		result[person] = parseFloat((bill[person] - averageSpent).toFixed(2));
	}

	return result

};

console.log(splitBill({    A: 20, 
    B: 15, 
    C: 10}))