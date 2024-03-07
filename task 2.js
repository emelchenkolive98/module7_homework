// Задание 2

function printName(obj, str) {
	return obj.hasOwnProperty(str);
}

const person = {
	name: 'Danila',
  	age: 25,
  	job: 'Frontend'
};

console.log(printName(person, 'name'));
console.log(printName(person, 'firstName'));