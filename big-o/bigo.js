// 1. What is the Big O for this?
// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

// constant O(1)

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// linear O(n)

function isEven(value) {
    if (value % 2 === 0) {
        return true;  
    }
    else
        return false;
    }
};

// this algorithm is O(1) constant because it is only returing booleans

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { // nested arrays
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// this algorithm is utilizing nested loops, so this big O is O(n^2)

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {  // O(n)linear
        array[i] *= 2; // O(1) constant
    }
    return array;
}

// this algorithm utilizes one for loop making it an O(n)linear 

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) { // O(n)linear
        if (array[i] === item) {
            return i;
        }
    }
}

// this algorithm utilizes one for loop making it an O(n)linear 

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {    //nested loops
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// due to using nested for loops this algorithm is an O(n^2)

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) { // linear O(n) 

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// linear O(n) 

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {  // linear O(n) 
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// linear O(n) 

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; // O(1) constant

}

// returns only 1 number

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {  
// linear O(n) 
        if (n % i === 0) return false;
    }
    return true;
}


// linear O(n) uses 1 for loop

// Tower of Hanoi
// Exponential O(2^n)
function TOH(n, source, dest, temp) {
  if(n >= 1) {
  TOH(n-1, source, temp, dest);
  print(source, dest);
  TOH(n-1, temp, dest, source);
  }  
  return;
}

TOH(64, 'A', 'C', 'B'); 
function print(a, b) {
  console.log(`Moving ${a} to -> ${b}`);
}
 // -> moving A -> B
// A -> C, B -> C



