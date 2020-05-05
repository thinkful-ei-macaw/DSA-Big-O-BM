// function sheep(num) {
//   if (num === 0) {
//     console.log("All sheep jumped over the fence")
//     return "All sheep jumped over the fence"
//   }

//   console.log(`${num}: Another sheep jumps over the fence`)
//   return sheep(num-1)
// }

// sheep(3)
// linear O(n)
// function sheep(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(`${i}: Another sheep jumps over teh fence`);
//     if (i === 1) {
//       console.log("All sheep jumped over the fence");
//       return "All sheep jumped over the fence";
//     }
//   }
// }

// sheep(3);
// Linear O(n)
// function powerCalculator(base, exp) {
//   if (exp <= 0) {
//     return "exponent should be >= 0"
//   }
//   else if (base <= 0) {
//     return "base should be >= 0"
//   }
//   else if (exp === 1) {
//     return base
//   }
//   exp--;
//   return base * powerCalculator(base, exp)
//   }

// powerCalculator(10,4)
// powerCalculator(10,2)

// function powerCalculator(base, exp) {
//   if (exp <= 0) {
//     return "exponent should be >= 0";
//   } else if (base <= 0) {
//     return "base should be >= 0";
//   } else if (exp === 1) {
//     return base;
//   }
//   let results = 1;
//   for (let i = 0; i < exp; i++) {
//     results *= base;
//   }

//   return console.log(results);
// }

// powerCalculator(10, 5);

// // input: string
// // output: gnirts

// // string
// // tring  s
// // ring   ts
// // ing    rts
// // ng     irts
// // g      girts
// //        gnirts
// Linear O(n)
// function reverseString(string, newS='') {
//   if  (!string.length) {
//     return ''
//   }
//   let char = string.slice(string.length-1)
//   newS = newS + char
//   string = string.slice(0, -1)
//   return newS + reverseString(string, newS)
// }

// reverseString('string')

function reverseString(string) {
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }

  return str;
}

//console.log(reverseString("muffins"));
// // Calculate the nth triangular number.
// //   A triangular number counts the objects that can form an equilateral triangle.
// //   The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
// //   This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

// //                                           *
// //                           *             *   *
// //             *           *    *        *   *   *
// // *     |   *   *  |   *    *    *  | *   *   *   *

// //  1st       2nd           3rd             nth?

// // output total number of dots
// // input num of dots on a side

// // in  out
// // 1   1
// // 2    3
// // 3   6
// // 4   10
// // 5   15
// // 6    21
// // 7    28
// O(n)
// function triangle(num) {
//   if (num === 1) {
//     return 1
//   }

//   return num + triangle(num - 1)
// }
function print(a) {
  console.log(a);
}
// Linear O(n)
function triangle(num) {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
print(`Expected: 6, actual:${triangle(3)}`);

// // Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// // Input: 02/20/2020
// // Output: ["02", "20", "2020"]

// // 02/20/2020
// // 20/2020      ['02']
// // 2020          ['02','20']
// //             ["02", "20", "2020"]
// O(n)
// function splitter(str, separator, test = 0) {

//   if (!str.includes(separator)){
//     return [str]
//   }

//   let index = str.search(separator);
//   let newS = str.slice(0, index)
//   str = str.slice(index + 1, str.length)
//   console.log(str)
//   return [newS , ...splitter(str, separator)]
// }

// splitter('02/20/2020', '/')
// Linear O(n)
function splitter(str, sep) {
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] === sep) {
      arr.push(str.slice(0, i));
      str = str.slice(i+1, str.length);
      i = 0;
      let temp = str;
    }
    // if(i = str.length - 1) {
    //   arr.push(str);
    // }
  }
  arr.push(str);
  return arr;
}
// // Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
print(splitter('02/20/2020', '/'));
// // 1 1
// // 1 2
// // 2 3
// // 3 4
// // 5 5
// // 8 6
// // 13 7
// O(n)
// function fib(num) {
//   if (num === 1) {
//     return 1
//   }
//   if (num === 2) {
//     return 1
//   }
//   return fib(num - 1)  + fib(num - 2)
// }

// fib(7)
function fib(num) {
  let arr = [];
  if (num <= 2) {
    return 1;
  } else {
    arr = [1, 1];  
  for(let i = 2; i <= num; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
}
  return arr[arr.length - 1];
}
print(fib(7));
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// input: 5
// output: 120

// // 5 *4
// // 5* 3
// // 5* 2
// // 5* 1
// // sum of above
// function fact(num) {
//   if (num === 1){
//     return 1
//   }

//   return num * fact(num - 1)
// }
// Linear O(n)
function fact(num) {
    if (num === 1){
    return 1
  }
  let res = 1;
  for(let i = num; i >= 1; i--) {
    res *= i;
  }
  return res;
}
print(fact(4));
// fact(4)

// let mySmallMaze = [
//   [" ", " ", " "],
//   [" ", "*", " "],
//   [" ", " ", "e"],
// ];

// let myBigMaze = [
//   [" ", " ", " ", "*", " ", " ", " "],
//   ["*", "*", " ", "*", " ", "*", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", "*", "*", "*", "*", "*", " "],
//   [" ", " ", " ", " ", " ", " ", "e"],
// ];

//check value of each item in array for ' '
//if open path is found, increment index2 and return r
//if *, increment index1 (x)
//if " ", increment index2 (y) and return d
//if "e", return

// function travelMaze(maze, row, column, path, dir, position) {
//   // console.log(row, column)
//   if (row < 0 || column < 0) {
//     return;
//   }

//   if (row >= maze.length || column >= maze[0].length) {
//     return;
//   }

//   path[position] = dir;
//   position++;
//   // console.log(maze, row, column)

//   if (maze[row][column] === "e") {
//     console.log(path);
//     return;
//   }

//   if (maze[row][column] === " ") {
//     maze[row][column] = "visted";

//     travelMaze(maze, row, column + 1, path, "R", position); //right
//     travelMaze(maze, row + 1, column, path, "D", position); //down
//     travelMaze(maze, row - 1, column, path, "U", position); //up
//     travelMaze(maze, row, column - 1, path, "L", position); //left

//     maze[row][column] = " ";
//   }
//   position--;
// }

// travelMaze(myBigMaze, 0, 0, [], "S", 0);

// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

// function anagram(word) {

// }

// anagram('east')