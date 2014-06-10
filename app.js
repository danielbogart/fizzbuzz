$(document).ready(function() {

	$(document).on('click', '#submit', function(event) {
	var inputNumber = document.getElementById('max').value;

		for (var x = 1; x <= inputNumber; x++) {
		if (x % 3 === 0) {
			if (x % 5 === 0) {
				var newContent = document.createElement('div'); 
				newContent.innerHTML = "fizz buzz<br>";
				document.body.appendChild(newContent);

			}
				else {
				var newContent2 = document.createElement('div'); 
				newContent2.innerHTML = "fizz<br>";
				document.body.appendChild(newContent2);
				}
			
			}

		if (x % 5 === 0 && x % 3 !== 0) {
				var newContent3 = document.createElement('div'); 
				newContent3.innerHTML = "buzz<br>";
				document.body.appendChild(newContent3);
		}

		if (x % 5 !== 0 && x % 3 !== 0) {
				var newContent4 = document.createElement('div'); 
				newContent4.innerHTML = x+"<br>";
				document.body.appendChild(newContent4);
		}
		

		}
	})

})

// The program should print out each number from 1 to 100, replacing numbers divisible 
// by both 3 and 5 with “fizz buzz”, 
// those divisible by 3 with “fizz”, and those divisible by 5 with “buzz”.