// Функція calculateTotal(number) приймає ціле число (параметр number).
// Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

function calculateTotalNumber(number) {
  let total = 0;
  let i = 1;

  //   for (let i = 1; i <= number; i++) {
  //     total += i;
  //   }

  while (i <= number) {
    total += i;
    i++;
  }

  return total;
}

console.log(calculateTotalNumber(3));
console.log(calculateTotalNumber(6));
console.log(calculateTotalNumber(9));

// -------------------------------------------------------------------------------------------------------

const answer = prompt('What is your name?');

console.log(answer);

alert('Hello!');

const isAdult = confirm('Are you an adult?');
console.log(isAdult);

// -------------------------------------------------------------------------------------------------------
