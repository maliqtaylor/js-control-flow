// if...else 

// Hour 
// If hour is between 6am and 12pm: Good morning!
// If hour is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening !

let hour = 10;

if (hour >= 6 && hour < 12)
  console.log('Good Morning!');
else if (hour >= 12 && hour < 18)
  console.log('Good Afternoon!');
else
  console.log('Good Evening!');

//switch...case 
let role = 'moderator';

switch (role) {
  case 'guest':
    console.log('Guest User');
    break;

  case 'moderator':
    console.log('Moderator User');
    break;

  default:
    console.log('Unknown Role');
}

//for 

for (let i = 0; i < 5; i++) {
  console.log('hello world', i);
}

//while 
// let num = 0

// while (num <= 10) {
//     if (num % 2 !== 0) console.log(num)
//     num++
// }

//do...while 
let i = 0;

do {
  if (i % 2 !== 0) console.log(i);
  i++;

} while (i <= 5);

//for...in 

const person = {
  name: 'Maliq',
  age: 23,
}

for (let key in person)
  console.log(key, person[key]);

//for...of