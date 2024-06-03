// 1-vazifa

// 1-masala

// let arr = [10, 20, 30, 40, 50];

// let birinchi-son = arr[0];
// let  sungi= arr[arr.length - 1];

// let sum = firstElement + lastElement;

// console.log("Birinchi va oxirgi elementlarning yig'indisi: "+sum);

// 2-masala

// let arr = [10, 20, 30, 40, 50, 60, 70];

// let max = Math.max(...arr);

// console.log("Massivdagi eng katta qiymat: " + max);

// 3-masala

// let arr = [1, 2, 3, 4, 5];

// function incrementArray(arr) {
//     let newArr = arr.map(function(num) {
//         return num + 1;
//     });
//     return newArr;
// }

// let incrementedArr = incrementArray(arr);
// console.log("Oshirilgan massiv: ", incrementedArr);

// 4-masala

// let a = prompt("Son kiriting :");

// let number = parseInt(a);

// console.log(`${number} ga bo'linuvchi sonlar:`);
// for (let i = 1; i < number; i++) {
//     if (number % i === 0) {
//         console.log(i);
//     }
// }

// 5-masala

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// function findSameElements(arr1, arr2) {
//     let sameElements = [];

//     let i = 0;
//     while (i < arr1.length) {
//         let j = 0;
//         while (j < arr2.length) {
//             if (arr1[i] === arr2[j]) {
//                 sameElements.push(arr1[i]);
//                 break;
//             }
//             j++;
//         }
//         i++;
//     }
//     return sameElements;
// }

// let common = findSameElements(arr1, arr2);
// console.log("Ikkala massivdagi bir xil qiymatlar: ", common);

// 2-vazifa

// 1-masala

// let a, b, c;
// console.log("a = ");
// a = parseInt(prompt());
// console.log("b = ");
// b = parseInt(prompt());
// console.log("c = ");
// c = parseInt(prompt());

// let katta = a;
// if (katta < b) katta = b;
// if (katta < c) katta = c;

// let kichik = a;
// if (kichik > b) kichik = b;
// if (kichik > c) kichik = c;

// let middle = a + b + c - katta - kichik;
// console.log("Kiritilgan uchta sonning o'rtanchasi: = " + middle);

// 2-masala

// let a = prompt("Uch xonali son kiriting:");

// let number = parseInt(a);

// let firstDigit = Math.floor(number / 100);

// if (firstDigit % 2 === 0) {
//     console.log("Birinchi raqam juft.");
// } else {
//     console.log("Birinchi raqam toq.");
// }

// 3-masala

// const maxScore = 150;

// let input = prompt("150 ballgacha bo'lgan son kiriting:");

// let score = parseFloat(input);

// if (isNaN(score) || score < 0 || score > maxScore) {
//     console.log("Iltimos, 0 dan 150 gacha bo'lgan son kiriting.");
// } else {
//     let percentage = (score / maxScore) * 100;

//     console.log("Sizning ballingiz: " + score + " (" + percentage.toFixed(2) + "%)");
// }

// 4-masala

// let number = 5;

// while (number <= 20) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
//     number++;
// }

// 5-masala

// let arr = ["salom", "xayr", "23", "Firdavs"];

// let index = 0;

// while (index < arr.length) {
//     if (arr[index] === "salom") {
//         console.log("Massivda 'salom' so'zi mavjud.");
//         break;
//     }
//     index++;
// }

// if (index === arr.length) {
//     console.log("Massivda 'salom' so'zi mavjud emas.");
// }

// 6-masala

// let arr = ["salom", true, 23, false, "Firdavs"];

// let index = 0;
// while (index < arr.length) {
//     if (typeof arr[index] === 'boolean') {
//         console.log("Boolean qiymati:", arr[index], "Index:", index);
//     }
//     index++;
// }

// 7-masala

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sumOdd = 0;
// let sumEven = 0;

// let index = 0;

// while (index < numbers.length) {
//     if (numbers[index] % 2 === 0) {
//         sumEven += numbers[index];
//     } else {
//         sumOdd += numbers[index];
//     }
//     index++;
// }

// console.log("Juft sonlar yig'indisi:", sumEven);
// console.log("Toq sonlar yig'indisi:", sumOdd);

// 8-masala

// let num1 = parseFloat(prompt("Sonni kiriting:"));
// let operator = prompt("Amalni kiriting :");
// let num2 = parseFloat(prompt("Sonni kiriting:"));

// let result;

// switch (operator) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         result = num1 / num2;
//         break;
//     default:
//         console.log("Noto'g'ri amal kiritildi.");
// }

// if (result !== undefined) {
//     console.log("Natija:", result);
// }

// 9-masala

// let numbers = [3, -2, 5, -8, 7, -4, 9];

// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] < 0) {
//         numbers[i] = -numbers[i];
//     }
//     i++;
// }

// console.log("Musbat sonlar : ", numbers);


//  3-vazifa


// 1-masala

// let n = prompt("Son kiriting:");

// let i = 1;
// while (i <= n) {
//     console.log(i);
//     i++;
// }

// 2-masala

// let n = prompt("Son kiriting : ");

// let i = 1;
// while (i <= n) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// 3-masala

// let n = prompt("Son kiriting : ");

// while (n >= 1) {
//     console.log(n);
//     n--;
// }


// 4-masala

// let a = prompt("a sonini kiriting :") - 0;
// let b = prompt("b sonini kiriting :") - 0;

// let sum = 0;
// let count = 0;

// while (a <= b) {
//     sum += a;
//     count++;
//     a++;
// }

// console.log("Sonlar yig'indisi:", sum);
// console.log("Sonlar soni:", count);


// 5-masala

// let a = prompt("a sonini kiriting :") - 0;
// let b = prompt("b sonini kiriting :") - 0;

// while (a <= b) {
//     if (b % a === 0) {
//         console.log(a);
//     }
//     a++;
// }

// 6-masala

// let a = prompt("a sonini kiriting :") - 0;
// let b = prompt("b sonini kiriting :") - 0;

// let sum = 0;

// while (a <= b) {
//     if (b % a === 0) {
//         sum += a;
//     }
//     a++;
// }

// console.log("Bo'luvchilar yig'indisi:", sum);

// 7-masala

// let i = 5;
// let kop = 1;

// while (i <= 49) {
//     if (i % 2 !== 0) {
//         kop *= i;
//     }
//     i++;
// }

// console.log("Toq sonlar ko'paytmasi:", kop);


// 10-masala

// let n = 5;
// let price = 0.1;
// let i = 1;

// while (i <= n) {
//     console.log(i + " kg: " + (price * i) + " so'm");
//     i++;
// }



// 11-masala

// let number = prompt("Ikki xonali son kiriting:");
// let one = number % 10;
// let ten = Math.floor(number / 10);

// while (ten !== one) {
//   if (ten > one) {
//     console.log("O'nliklar xonasi katta:", ten);
//   } else {
//     console.log("Birliklar xonasi katta:", one);
//   }
//   number = prompt("Ikki xonali son kiriting:");
//   ten = Math.floor(number / 10);
//   one = number % 10;
// }



