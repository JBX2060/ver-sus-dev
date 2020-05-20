/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "Zephyr",
		password: "token001"
	},
	{ // Object @ 1 index
		username: "Jack",
		password: "token002"
	},
	{ // Object @ 2 index
		username: "Nix",
		password: "token003"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			alert('You have entered the correct pass!! You will be redirected to the control panel in a sec');
window.open('/panel55444/index.html');
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
	alert('You have entered the wrong developer password');
}