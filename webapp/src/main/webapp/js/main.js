/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "ravi",
		password: "ravi"
	},
	{ // Object @ 1 index
		username: "swastik",
		password: "swastik"
	},
	{ // Object @ 2 index
		username: "cheytra",
		password: "cheytra"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			//console.log(username + " is logged in!!!")
			//alert("Credentials are Correct")
			//window.location="https://www.w3schools.com/colors/colors_picker.asp";
			window.location="/webapp/success.html";
			// stop the function if this is found to be true
			return
		}
	}
	//alert("incorrect username or password")
	//window.location="https://colorlib.com/wp/html5-and-css3-login-forms/"
	window.location="/webapp/errorpage.html";
}
