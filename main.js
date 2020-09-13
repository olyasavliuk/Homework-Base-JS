// Task 1, 2
const YEAR = 2020;
let yearOfBorn = +prompt('What year are you born?'),
    age = YEAR - yearOfBorn ;
alert(`Hi, I am ${age} years old!`);

// Task 3
let height = +prompt('Please, write height of rectangle.'),
    width = +prompt('Please, write width of rectangle.'),
    perimeter = height * 2 + width * 2 ;
alert(`Perimeter of rectangle is ${perimeter}.`);

// Task 4
const PI = 3.14;
let radius = +prompt('Please, write radius of circle.'),
    square = PI * radius ** 2 ;
alert(`Square of circle is ${square}.`);

// Task 5
const SPEED = 50;
let time = +prompt('How many more hours do you need to drive?'),
    distance = time * SPEED ;
alert(`The distance you will drive is ${distance} kilometers.`);

// Task 6 (into miles)
const INDEX = 0.62137;
let km = +prompt('Please, write the distance in kilometers.'),
    kmIntoMiles = INDEX * km ;
alert(`${km} kilometers is ${kmIntoMiles} miles.`);

// Task 6 (into kilometers)
let miles = +prompt('Please, write the distance in miles.'),
    milesIntoKm = miles / INDEX ;
alert(`${miles} miles is ${milesIntoKm} kilometers.`);

// Task 7
let price =+prompt('Please write the price of gasoline.'),
    money =+prompt('Please, write how much money do you have on your credit card.'),
    liters = money / price ,
    change = money % price ;
alert(`You can buy ${Math.floor(liters)} liters of gasoline. ${change} $ is your change.`);

