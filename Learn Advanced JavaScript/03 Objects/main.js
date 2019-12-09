var business ={
	first: "Google", 
	second: "Apple", 
	third: "Microsoft", 
	forth: "Facebook", 
	fifth: "Twiter",
	fullName : function() {
		return this.first + " " + this.fifth;
	}
};

document.getElementById("test").innerHTML = business.fullName();

