/// JAVASCRIPT HAS ITS OWN SORT METHOD

/*
TELLING JAVASCRIPT HOW TO START
THE BUILT IN SORT METHOD ACCEPTS AN OPTIONAL COMPARATOR FUNCTION
THE COMPARATOR LOOKS AT A PAIR OF ELEMENTS(a and b) DETERMINES THEIR SORT ORDER BASED ON RETURN VALUE
IF IT RETURNS A NEGETIVE NUMBER a SHOULD COME BEFORE b
IF IT RETURNS A POSITIVE NUMBER a SHOULD COME AFTER b
IF IT RETURNS 0 a AND b ARE SAME AS FAR AS SORT IS CONCERNED.
*/

function numberCompare(num1,num2){
    return num2 - num1;
}

console.log([6,4,15,10].sort(numberCompare));

function compareByLen(str1,str2){
    return str1.length - str2.length;
}

var newArr = ['Steele','Colt','Data Structures','Algorithms'].sort(compareByLen);
console.log(newArr);