$(document).ready(function() {

	$(document).on('click', '#submit', function(event) {
	var inputNumber = document.getElementById('max').value;
	var container = document.getElementById("container");

	if (isNaN(parseInt(inputNumber))) {
		var newContent5 = document.createElement('div');
		newContent5.innerHTML = "Enter an integer, or else...";

		while (container.hasChildNodes()) {
			container.removeChild(container.lastChild);
		}		

		container.appendChild(newContent5);
	}

	else {

		while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
		}		
	
		for (var x = 1; x <= inputNumber; x++) {
			if (x % 3 === 0) {
				if (x % 5 === 0) {
					var newContent = document.createElement('div'); 
					newContent.innerHTML = "fizz buzz<br>";
					container.appendChild(newContent);

				}
					else {
					var newContent2 = document.createElement('div'); 
					newContent2.innerHTML = "fizz<br>";
					container.appendChild(newContent2);
					}
				
				}

			if (x % 5 === 0 && x % 3 !== 0) {
					var newContent3 = document.createElement('div'); 
					newContent3.innerHTML = "buzz<br>";
					container.appendChild(newContent3);
			}

			if (x % 5 !== 0 && x % 3 !== 0) {
					var newContent4 = document.createElement('div'); 
					newContent4.innerHTML = x+"<br>";
					container.appendChild(newContent4);
			}
			

		}
	}
	})

})

// The program should print out each number from 1 to 100, replacing numbers divisible 
// by both 3 and 5 with “fizz buzz”, 
// those divisible by 3 with “fizz”, and those divisible by 5 with “buzz”.