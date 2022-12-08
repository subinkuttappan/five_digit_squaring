let fiveDigitNumber = 11111;

function generateNumber() 
{
	let validNumberObtained = false;

	while(!validNumberObtained)
	{
		fiveDigitNumber = Math.floor(Math.random()*90000) + 10000;
		console.log(fiveDigitNumber);
		if(Math.floor(fiveDigitNumber / 10000) <= 5 && Math.floor((fiveDigitNumber%10000) / 1000) <= 5)
		{
			validNumberObtained = true;
		}
	}
	document.getElementById("fds-number").innerHTML = fiveDigitNumber;
	document.getElementById("fds-square").innerHTML = '';
}

function generateSquare() 
{
	document.getElementById("fds-square").innerHTML = fiveDigitNumber*fiveDigitNumber;
}
