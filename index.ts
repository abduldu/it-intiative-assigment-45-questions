
let name_tate: string = "Eric";
console.log(`Hello ${name_tate}, would you like to learn some Python today?`);


console.log(name_tate.toLowerCase());
console.log(name_tate.toUpperCase());
console.log(name_tate[0].toUpperCase() + name_tate.slice(1).toLowerCase());


let quote: string = `tate once said, "the average man does not try very hard so if you try very hard it is impossible to be an average."`;
console.log(quote);

let famous_person: string = "tate";
let message: string = `${famous_person} once said, "sadness is a warnig you feel it for a reasoon your mind is telling you to work harder."`;
console.log(message);


let name_with_whitespace: string = "\t   Tate \n";
console.log(name_with_whitespace);
console.log(name_with_whitespace.trim());
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);


let favorite_number: number = 7;
console.log(`My favorite number is ${favorite_number}.`);

let names: string[] = ["Alice", "Bob", "Charlie"];
names.forEach(name => console.log(name));

names.forEach(name => console.log(`Hello ${name}, how are you today?`));

let transportation: string[] = ["car", "motorcycle", "bicycle"];
transportation.forEach(item => console.log(`I would like to own a ${item}.`));

let guest_list: string[] = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
guest_list.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

console.log(`${guest_list.pop()} can't make it to dinner.`);
guest_list.push("Galileo Galilei");
guest_list.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

// Exercise 16
console.log("I found a bigger dinner table!");
guest_list.unshift("Leonardo da Vinci");
guest_list.splice(2, 0, "Nikola Tesla");
guest_list.push("Charles Darwin");
guest_list.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));

console.log("I can only invite two people for dinner.");
while (guest_list.length > 2) {

    console.log(`Sorry, ${guest_list.pop()}, I can't invite you to dinner.`);
}
guest_list.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));
guest_list = [];
console.log(guest_list);

let places_to_visit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
console.log("Original Order:", places_to_visit);
console.log("Alphabetical Order:", places_to_visit.slice().sort());
console.log("Original Order:", places_to_visit);
console.log("Reverse Alphabetical Order:", places_to_visit.slice().sort().reverse());
console.log("Original Order:", places_to_visit);
places_to_visit.reverse();
console.log("Reversed Order:", places_to_visit);
places_to_visit.reverse();
console.log("Original Order:", places_to_visit);
console.log("Sorted Alphabetical Order:", places_to_visit.slice().sort());
console.log("Sorted Reverse Alphabetical Order:", places_to_visit.slice().sort().reverse());

console.log(`I am inviting ${guest_list.length} people to dinner.`);

let favorite_items: string[] = ["mountains", "rivers", "countries"];
console.log(favorite_items);

let myObject = {
    mountains: "Himalayas",
    rivers: "Nile",
    countries: "Italy"
};
console.log(myObject);

let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log("Player earned 5 points.");
}

if (alien_color === 'green') {
    console.log("Player earned 5 points for shooting the alien.");
} else {
    console.log("Player earned 10 points.");
}

if (alien_color === 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player earned 15 points.");
}

let age: number = 25;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}