// kilometerToMeter Function start from here:
function kilometerToMeter(kilometer) {
	// if value of kilometaer is negative than return this worning!!
	if (kilometer < 1) {
		return "Wrong!!Kilometers cannot be negative values !!";
	}
	// IF value of kilometer is positive then calculate to meter by this methos:
	else {
		var calculator = kilometer * 1000;
		return calculator;
	}
}

//   budgetCalculator Function start from here:

function budgetCalculator(WatchNumbers, MobileNumbers, LeptopNumbers) {
	// Here we have multiplied the products with their fixed price :
	WatchNumbers = WatchNumbers * 50;
	MobileNumbers = MobileNumbers * 100;
	LeptopNumbers = LeptopNumbers * 500;

	// From here I run the loop, to check if the number of any product is negative:
	var allProduct = [WatchNumbers, MobileNumbers, LeptopNumbers];
	for (var i = 0; i < allProduct.length; i++) {
		var NagativeCount = 0;

		if (allProduct[i] < 1) {
			NagativeCount++;
			break;
		}
	}
	// If any product number is negative then the following warning will return:
	if (NagativeCount > 0) {
		return "Wrong!!The number of any one of your products is negative!!";
	}
	//If there are no negative numbers then the sum of all the products will be returned:
	else {
		var totalCalculate = WatchNumbers + MobileNumbers + LeptopNumbers;
		return totalCalculate;
	}
}

// hotelCost Function Start from here:

function hotelCost(day) {
	// If someone expresses the day in decimals to mean half a day or by mistake then it will return in a round:
	day = Math.round(day);
	//If someone expresses the day with a negative number then the following warning will be returned:
	if (day < 1) {
		return "Wrong! It is not possible to have a negative day !!";
	}
	// If not negative, return the following calculation:
	else {
		var cost = 0;
		if (day <= 10) {
			cost = day * 100;
		} else if (day <= 20) {
			var first_10_Day = 10 * 100;
			var after_10_Day = (day - 10) * 80;
			cost = first_10_Day + after_10_Day;
		} else {
			var first_10_Day = 10 * 100;
			var second_10_Day = 10 * 80;
			var after_20_Day = (day - 20) * 50;
			cost = first_10_Day + second_10_Day + after_20_Day;
		}
	}
	return cost;
}

//  megaFriend Function start from Here:

function megaFriend(name) {
	var numberOfLetter = [];
	var largeName = [];
	// The following loop will count the number of letters between friends' names without spaces:
	for (var i = 0; i < name.length; i++) {
		var check = name[i];
		var spaceCount = 0;
		// The following loop will find the space between just one name:
		for (var j = 0; j < check.length; j++) {
			var checkSpace = check[j].split("");
			if (checkSpace == " ") {
				spaceCount = spaceCount + 1;
			}
		}
		// letter count & find large number:
		var letter = name[i].length - spaceCount;

		if (letter > numberOfLetter) {
			numberOfLetter = letter;
			largeName = name[i];
		}
	}
	// This warning will show if there is no element in the array:
	if (numberOfLetter == 0) {
		return "Hello Man!! You are not on the right track because you did not give a name to the array!!";
	}
	// If there are two or more elements in the array, the big name will show the comparison:
	else {
		return largeName;
	}
}
