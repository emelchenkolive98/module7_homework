//Задание 1

function outputOfOwnProperties(obj) {
	for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
		console.log(`${key}: ${obj[key]}`);
	  }
	}
}

const person = {
	name: 'Danila',
  	age: 25,
  	job: 'Frontend'
};

outputOfOwnProperties(person);