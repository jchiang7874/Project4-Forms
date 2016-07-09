// retrieve the form element, assuming it exists as "<div id="signup">

var signupForm = document.getElementById('signup');

signupForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

});

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
	checkNames();
	checkEmail();
	checkDOB ();
	checkPswd();
})

function checkNames () {
	var names = document.getElementsByClassName('name');
	if (names[0].value.length <= 1 || names[1].value.length <= 1) {
		alert('Please enter name');
	} else {
		names[0].className += " valid";
		names[1].className += " valid";
	}
}

function checkEmail () {
	var email = document.getElementById('email'),
		input = email.value;

	if (typeof(input) === "string" && input.indexOf('@') != -1) {
		email.className = "valid";
	} else {
		alert('Please enter email');
	}
}

function checkDOB () {
	var dob = document.getElementById('dob'),
		input = dob.value,
		validDate = new Date (input);

	if (validDate != 'Invalid Date') {
		dob.className = "valid";
	} else {
		alert('Please enter valid date of birth');
	}
}

function checkPswd() {
	var pswd = document.getElementById('pswd');
	if (pswd.value.length < 6) {
		alert('Please enter valid password with minimum 6 characters/digits');
	} else {
		pswd.className = "valid";
	}	
}


