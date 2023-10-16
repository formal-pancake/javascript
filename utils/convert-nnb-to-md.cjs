const fs = require('fs');


fs.readFile('JavaScript.nnb', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
	} else {
		const fileContent = data;
		try {
			const jsonData = JSON.parse(fileContent);
			console.log(jsonData[0]);
			generateMd(jsonData)
		} catch (error) {
			console.error('Invalid JSON:', error);
		}
	}
});

/**
 * 
 * @param {{ cells: [{ source: string, language: string}]}} json 
 */
function generateMd(json) {

	const md = json.cells.reduce((acc, cell) => {
		if (cell.language == "markdown") {
			acc += cell.source;
		} else {
			acc += "```" + cell.language + "\n" + cell.source + "\n```";
		}
		return acc + "\n"
	}, "");

	fs.writeFileSync("./JavaScript.md", md);
}




