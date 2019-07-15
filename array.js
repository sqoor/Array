console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1, 7, 9, 45]


 Correct code:

 ["Str", "alex","moh"]
 ['the', 'fox', 'over', lazy, 'dog']

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]



Answers:

Banana = 1,
Tomato = 0  
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

var favoriteFood = ['mansaf', 'maqlopa', 'mahashee', 'zarp', 'kabseh'];
var favoriteSport = ['footbal', 'tennis', 'basketball']
var favoriteMovie = ['Avatar', 'Training Day', 'American Ganstar'];




/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

 function firstOfArray(arr) {
     return arr[0];
 }

 




/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arr) {
    return arr[arr.length -1];
}


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
[9, 10]
*/

var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.push(10);
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);




/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]


Answers: 

push:       the new size of array (length)
unshift:    the new size of the array (length)
pop:        the deleted element from the array
shift:      the removed element from the array
*/




/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr) {
    if(arr.length % 2 !== 0) {
        var middleIndex = arr.length / 2 - 0.5
        return arr[middleIndex];
    } 
    else {
        var indexMiddleItem1 = arr.length / 2;
        var indexMiddleItem2 = arr.length / 2 - 1;
        var middleValue1 = arr[indexMiddleItem1];
        var middleValue2 = arr[indexMiddleItem2];

        var results = [middleValue1, middleValue2]
        return results;

    }
}



/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
animals[0] = 'zebra';
animals[1] = 'elephent';
animals.length = 2; 


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function  indexOfArray(arr, index){
    return arr[index]; 
}



/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr) {
    return arr.splice(0, arr.length - 1);
}



/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/


function addToEnd(arr, value) {
    arr[arr.length] = value;
    return arr;
}


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum  = sum + arr[i];
    }

    return sum;
}



/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(array) {
    var minItem = array[0];

    for(var i = 1; i < array.length; i++) {
        if(minItem > arr[i])
            minItem = array[i];
    }
}


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: removeFromArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function removeFromArray(array, element) {
    var indexElement = array.indexOf(element);
    array.splice(indexElement, 1);
}


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(arr) {
    var oddArray = []; 

    for(var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var isElementOdd = element % 2 !== 0;

        if(isElementOdd)
            oddArray.push(element);
    }

    return oddArray;
}


function oddArray2(arr) {
    var oddArray = []; 
    var counter = 0;

    while(counter < arr.length) {
        var element = arr[counter];
        var isElementOdd = element % 2 !== 0;

        if(isElementOdd)
            oddArray.push(element);

        counter++;
    }

    return oddArray;
}


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(arr) {
    var sum = 0;
    var average;

    for(var i = 0; i < arr.length; i++)
        sum += arr[i];

    average = sum / arr.length;
    
    return average;
}


function aveArray2(arr) {
    var sum = 0;
    var average;
    var counter = 0;

    while(counter < arr.length) {
        sum += arr[counter];

        counter++;
    }

    average = sum / arr.length;
    
    return average;
}




/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(stringsArray) {
    var shortestElementIndex = 0;
    var shortestElement = stringsArray[shortestElementIndex];

    for(var i = 1; i < stringsArray.length; i++) {
        if(shortestElement.length > stringsArray[i].length)
            shortestElementIndex = i;
    }

    return stringsArray[shortestElementIndex];
}


function shorterInArray2(stringsArray) {
    var shortestElementIndex = 0;
    var shortestElement = stringsArray[shortestElementIndex];
    var counter = 1;

    while(counter < stringsArray.length) {
        if(shortestElement.length > stringsArray[counter].length)
            shortestElementIndex = counter;
        
        counter++;
    }

    return stringsArray[shortestElementIndex];
}





/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(str, char) {
    var charRepetition = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] === char)
            charRepetition++;
    }

    return charRepetition;
}


function repeatChar2(str, char) {
    var charRepetition = 0;
    var counter = 0;

    while( counter < str.length) {
        if(str[counter] === char)
            charRepetition++;

        counter++;
    }

    return charRepetition;
}







/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(stringArray) {
    var element;
    var isIndexEven;
    var isElementLengthOdd;
    var evenIndexOddLengthArray = [];

    for(var i = 0; i < stringArray.length; i++) {
        element = stringArray[i];
        isIndexEven = i % 2 === 0;
        isElementLengthOdd = element.length % 2 !== 0;

        if(isIndexEven && isElementLengthOdd)
            evenIndexOddLengthArray.push(element);
    }

    return evenIndexOddLengthArray;
}


function evenIndexOddLength2(stringArray) {
    var element;
    var isIndexEven;
    var isElementLengthOdd;
    var evenIndexOddLengthArray = [];
    var counter = 0;

    while(counter < stringArray.length) {
        element = stringArray[counter];
        isIndexEven = counter % 2 === 0;
        isElementLengthOdd = element.length % 2 !== 0;

        if(isIndexEven && isElementLengthOdd)
            evenIndexOddLengthArray.push(element);
     
        counter++
    }

    return evenIndexOddLengthArray;
}






/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(numbersArray) {
    var powerArray = [];
    var powerElement;

    for(var i = 0; i < numbersArray.length; i++) {
        powerElement = Math.pow(numbersArray[i], i);
        powerArray.push(powerElement);
    }

    return powerArray;
}


function powerElementIndex2(numbersArray) {
    var powerArray = [];
    var powerElement;
    var counter = 0;

    while(counter < numbersArray.length) {
        powerElement = Math.pow(numbersArray[counter], counter);
        powerArray.push(powerElement);

        counter++;
    }

    return powerArray;
}


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function evenNumberEvenIndex(numbersArray) {
    var evenNumberEvenIndexArray = [];
    var isEvenNumber;
    var isEvenIndex;

    for(var i = 0; i < numbersArray.length; i++) {
        isEvenIndex = i % 2 === 0;
        isEvenNumber = numbersArray[i] % 2 === 0;

        if(isEvenIndex && isEvenNumber) 
            evenNumberEvenIndexArray.push(numbersArray[i]);
    }

    return evenNumberEvenIndexArray;
}




function evenNumberEvenIndex2(numbersArray) {
    var evenNumberEvenIndexArray = [];
    var isEvenNumber;
    var isEvenIndex;
    var counter = 0; 

    while(counter < numbersArray.length) {
        isEvenIndex = counter % 2 === 0;
        isEvenNumber = numbersArray[counter] % 2 === 0;

        if(isEvenIndex && isEvenNumber) 
            evenNumberEvenIndexArray.push(numbersArray[counter]);

        counter++;
    }

    return evenNumberEvenIndexArray;
}