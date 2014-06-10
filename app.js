$(document).ready(function() {

	for (var x = 1; x <= 100; x++) {
	if (x % 3 === 0) {
		if (x % 5 === 0) {
			document.write("fizz buzz<br>");
		}

			else {
				document.write('fizz<br>');
			}
		
		}

	if (x % 5 === 0 && x % 3 !== 0) {
		document.write('buzz<br>');
	}

	if (x % 5 !== 0 && x % 3 !== 0) {
	document.write(x+ "<br>");
	}

	}

})

// The program should print out each number from 1 to 100, replacing numbers divisible 
// by both 3 and 5 with “fizz buzz”, 
//those divisible by 3 with “fizz”, and those divisible by 5 with “buzz”.