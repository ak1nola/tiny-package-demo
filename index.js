const options = {
	"a":["á", "à"],
	"o":["ó", "ò", "ọ", "ọ́", "ọ̀"],
	"e":["é", "è", "ẹ", "ẹ́", "ẹ̀"],
	"i":["í", "ì"],
	"u":["ú", "ù"]
};

function alternates(name) {
	let list=[""]; //note that we initialize with one empty string on purpose

	for (let letter of name) {
		//console.log(`==================== adding [${letter}] to [${list.join(", ")}]`);

		list = list.map(prefix => {
				let temp = []; //initialize with the letter as-is just for kicks
				temp.push(prefix + letter);

				if (options[letter] === undefined)
					return temp;

				for (let chr of options[letter])
					temp.push(prefix + chr);

				return temp;
			});

		list=list.reduce((acc, value) => { return acc.concat(value) }, []);
		//console.log("... " + list.join(","));
	}

	return list;
}

console.log(alternates("akinola").join(","));
