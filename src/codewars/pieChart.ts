const generatePieChart = (obj: string): string => {
	//counting length of json

	const inputJSON: {[key: string]: number} = JSON.parse(obj);

	const rawValues = Object.values(inputJSON);
	const totalContOfValues = rawValues.reduce((total, value) => total + value);

	const singleUnit = 360 / totalContOfValues;
	const result: {[key: string]: number} = {};
	
	for (const key in inputJSON) {
		// generate final values

		result[key] = parseFloat((inputJSON[key] * singleUnit).toFixed(2));
	}


	return JSON.stringify(result)
}




console.log(generatePieChart('{"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2}'))