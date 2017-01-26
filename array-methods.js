var planets = ["mercury", 
				"venus",
				"earth",
				"mars",
				"jupiter",
				"saturn",
				"uranus",
				"neptune"];

var el = document.getElementById("planets");
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach(function(value, index, array){
	el.innerHTML += "<p>" + array[index] + "<p>"
});[0+1] + " ";

// Use the map method to create a new array where the first letter of each planet is capitalized

planets = planets.map(function(str){
	return str.charAt(0).toUpperCase() + str.slice(1) + " "
});
//el.innerHTML = planets;


// Use the filter method to create a new array that contains planets with the letter 'e'

var filteredPlanets = planets.filter(function(e){
	return e.includes("e")});
console.log(planets);
el.innerHTML = filteredPlanets;

console.log("I'm Alive");

// Use the reduce method to create a sentence from the words in the following array

var words = ["The",
			"early",
			"bird",
			"might",
			"get",
			"the",
			"worm",
			"but",
			"the",
			"second",
			"mouse",
			"gets",
			"the",
			"cheese"];

words = words.reduce(function(everything, string){
	return everything + " " + string
}) + ".";
console.log(words);
