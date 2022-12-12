let fiveDigitNumber = 11111;

function generateNumber(digits) 
{
	document.getElementById("fds-number-two").innerHTML = '';
	document.getElementById("fds-number-three").innerHTML = '';
	document.getElementById("fds-number-four").innerHTML = '';
	document.getElementById("fds-number-five").innerHTML = '';
	document.getElementById("fds-square").innerHTML = '';

	let validNumberObtained = false;
	switch(digits)
	{
		case 2 :
			fiveDigitNumber = Math.floor(Math.random() * 90 + 10);
			console.log(fiveDigitNumber);
			document.getElementById("fds-number-two").innerHTML = fiveDigitNumber;
			break;
		case 3 :
			fiveDigitNumber = Math.floor(Math.random() * 900 + 100);
			console.log(fiveDigitNumber);
			document.getElementById("fds-number-three").innerHTML = fiveDigitNumber;
			break;
		case 4 :
			while(!validNumberObtained)
			{
				fiveDigitNumber = Math.floor(Math.random() * 9000 + 1000);
				console.log(fiveDigitNumber);
				if(Math.floor(fiveDigitNumber / 1000) <= 5)
				{
					validNumberObtained = true;
				}
			}
			document.getElementById("fds-number-four").innerHTML = fiveDigitNumber;
			break;
		case 5 :
			while(!validNumberObtained)
			{
				fiveDigitNumber = Math.floor(Math.random()*90000) + 10000;
				console.log(fiveDigitNumber);
				if(Math.floor(fiveDigitNumber / 10000) <= 5 && Math.floor((fiveDigitNumber%10000) / 1000) <= 5)
				{
					validNumberObtained = true;
				}
			}
			document.getElementById("fds-number-five").innerHTML = fiveDigitNumber;
			break;
	}
}

function generateSquare() 
{
	document.getElementById("fds-square").innerHTML = fiveDigitNumber*fiveDigitNumber;
}
