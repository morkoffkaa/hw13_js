let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти мінімальний елемент масиву та його порядковий номер.
console.log(`Min element : ${Math.min(...arr)}`);
let minIndex = arr.indexOf(Math.min.apply(null, arr));
console.log(`Min element index : ${minIndex}`);

// Знайти максимальний елемент масиву та його порядковий номер.
console.log(`Max element : ${Math.max(...arr)}`);
let maxIndex = arr.indexOf(Math.max.apply(null, arr));
console.log(`Max element index : ${maxIndex}`);

// Знайти суму непарних позитивних елементів.
let countOdd = 0;
value = arr.reduce(function (sum, item) {

  if (item > 0 && item % 2 !== 0) {
    countOdd++;
    return sum + item;
  } else {
    return sum;
  }
})

console.log(`Cумa непарних позитивних елементів : ${value}`);
console.log(`Кількість непарних позитивних елементів : ${countOdd}`);

// Знайти суму парних позитивних елементів.

let countEven = 0;
value = arr.reduce (function (accumulator, item) {
  if(item > 0 && item % 2 == 0) {
    countEven++;
    return accumulator + item;
  } else {
      return accumulator;
    }
  })

  console.log(`Cумa парних позитивних елементів : ${value}`); 
  console.log(`Кількість парних позитивних елементів : ${countEven} `);

// Знайти добуток позитивних елементів.

value = arr.reduce (function (accumulator, item) {
  if(item > 0) {
    return accumulator * item;
  } else {
      return accumulator;
    }
  })

  console.log(`Добуток позитивних елементів : ${value}`);



// Знайти найбільший серед елементів масиву, остальні обнулити.
let max = arr[0];
let maxi = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    arr[maxi] = 0;
    maxi = i;
  } else {
    arr[i] = 0;
  }
}

console.log(arr);





// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.