var cars = ["Ford", "Chevy", "Dodge", "Toyota"];

document.getElementById("test1").innerHTML = cars;

function myFunction() {
	cars.push("Volvo");
	document.getElementById("test1").innerHTML = cars;

}

