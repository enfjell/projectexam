// JavaScript Document




// Contact field


function validateName() {
	var name = document.getElementById('name').value;
	
	if(name.length === 0) {
		checkValue('&#10060', 'name-error' , 'red');
		return false;
	}

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
	 checkValue('Enter your first and last name','name-error', 'red');
	  return false;
  }

  checkValue('Valid', 'name-error', 'green');
  return true;
}


function validatePhone() {
	var phone = document.getElementById('phone').value;
	
	if(phone.length === 0) {
		checkValue('&#10060', 'phone-error', 'red');
		return false;
	}

    if(!phone.match(/^[0-9]{10}$/)) {
     checkValue('Only digits its allowed, please.' ,'phone-error', 'red');
      return false;
    }
	checkValue('Valid', 'phone-error', 'green');
	return true;
}


function validateEmail () {
	var email = document.getElementById('email').value;
	
	if(email.length === 0) {
		checkValue('&#10060','email-error', 'red');
		return false;
	}
	
	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		checkValue('Email Invalid', 'email-error', 'red');
		return false;
	}
	
	checkValue('Valid', 'email-error', 'green');
	return true;
}


function validateMessage() {
	var message = document.getElementById('message').value;
	var required = 10;
	var left = required - message.length;
	
	if (left > 0) {
		checkValue(left + ' more characters required','message-error','red');
		return false;
	}
	
	checkValue('Valid', 'message-error', 'green');
	return true;
}


function validateForm() {
	if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
		subShow('submit-error');
		checkValue('Please fix errors to submit.', 'submit-error', 'red');
		setTimeout(function(){subHide('submit-error');}, 2000);
		return false; 
	}
	else {
		
	}
}


function subShow(id) {
	document.getElementById(id).style.display = 'block';
}


function subHide(id) {
	document.getElementById(id).style.display = 'none';
}


function checkValue(message, promptLocation, color) {
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}

