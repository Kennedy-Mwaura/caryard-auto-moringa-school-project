document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);



function handleSignUpFormSubmit(event){
	
	event.preventDefault();

	const passwordField = document.getElementById('signup_password')
	const confirmPasswordField = document.getElementById('confirm_password');

	document.getElementById('short_password_feedback').style.display='none'
	document.getElementById('not_password_match_feedback').style.display='none'


	if (passwordField.value.length < 8){
		document.getElementById('short_password_feedback').style.display='block'
	}

	if (passwordField.value !== confirmPasswordField.value){
		document.getElementById('not_password_match_feedback').style.display='block'

	}
	// Testing if the password and confirm password field are the same

}

