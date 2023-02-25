/*problem-1:
Here, the function takes a positive number as input,
performs the calculation described in the task
then returns the result.*/

function mindGame(number) {
  return (number * 3 + 10) / 2 - 5;
}

/*problem:2
The function takes a string as input,
calculates the number of characters in the string
then returns 'even' if the number of characters is even, and 'odd' if it is odd.
if there is no string input then it will be show an error message. */

function evenOdd(word) {
  const message1 = "even";
  const message2 = "odd";
  const message3 = "Error!!!Please enter a string";
  if (typeof word === "string") {
    if (word.length % 2 == 0) {
      return message1;
    } else {
      return message2;
    }
  } else {
    return message3;
  }
}

/*problem:3
The function takes in a number input and first checks if it is less than 7.
 If it is, it returns the difference between 7 and input.
If input is not less than 7, it returns double the value of input. */

function isLGSeven(num) {
  if (num < 7) {
    return num - 7;
  } else {
    return num * 2;
  }
}

/*problem:4

First of all we check if the input value is array or not.
If input is not an array  then we return an error messages
And if it's array then we run it in the for loop and
See if there is  any array values are negative and
if there is, Then we count it and return the result */

function findingBadData(arr) {
  const message = "Error!!!Please Enter an Array";

  if (Array.isArray(arr) === true) {
    let badData = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        badData++;
      }
    }
    return badData;
  } else {
    return message;
  }
}

/*problem:5
First we check if the three input value is numbers or not.
If input is  not three number values  then we return an error message
and if it's three numbers, then we calculate it according to the instruction.
If the result is more than 2000 then we subtract the result with 2000 and return the result.
And if the result is not more than 2000 then we just return the result */

function gemsToDiamond(firstDiamond, secondDiamond, thirdDiamond) {
  const message = "Error!!!!Please Enter The Three number values";
  if (
    typeof firstDiamond === "number" &&
    typeof secondDiamond === "number" &&
    typeof thirdDiamond === "number"
  ) {
    const firstFriend = firstDiamond * 21;
    const secondFriend = secondDiamond * 32;
    const thirdFriend = thirdDiamond * 43;

    let totalDiamond = firstFriend + secondFriend + thirdFriend;
    if (totalDiamond > 1000 * 2) {
      totalDiamond = totalDiamond - 2000;
    }
    return totalDiamond;
  } else {
    return message;
  }
}
