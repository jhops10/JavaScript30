const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


//Regular
console.log('Hello');

//Interpolated
console.log('Hello I am a %s string!', '💩');

//Styled
console.log('%c I am some great text', 'font-size:20px');

//Warning!
console.warn('OOOH NOOO');

//Error
console.error('ERROR!');

//Info
console.info('Crocodiles eat 3-4 people per year');

//Testing
console.assert(1 === 2, 'That is wrong!');

//Clearing
console.clear();

//Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);

//Grouping Together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

//Counting
console.count('Joao');
console.count('Joao');
console.count('Joao');
console.count('Joao');
console.count('Joao');

//Timing
console.time('Fetching Data');
fetch('https://api.github.com/users/jhops10')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetching Data');
    console.log(data);
  });

//Table
console.table(dogs)