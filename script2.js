function validatePhoneNumber() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var err1 = document.getElementById('err1');
    var regexp1 = /^[0-9]{10}$|^[0-9]{3}[-. ][0-9]{3}[-. ][0-9]{4}$/;

    if (regexp1.test(phoneNumber)) {
        err1.innerText = "";
        err1.style.color = 'green';
        return true;
    } else {
        err1.innerText = "Please Enter a valid Phone Number";
        err1.style.color = 'red';
        return false;
    }
}
// Function to validate email
function validateEmail() {
    var email = document.getElementById('email').value;
    var err2 = document.getElementById('err2');
    var regexp = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;

    if (!regexp.test(email)) {
        err2.innerText = "Please enter a Valid Email ";
        err2.style.color = 'red';
        return false;

    } else {
        err2.innerText = " ";
        return true;

    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var err3 = document.getElementById('err3');
    var regexp3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (regexp3.test(password)) {
        if (password.length >= 12) {
            err3.innerText = "Strong Password";
            err3.style.color = 'green';
        } else if (password.length >= 8) {
            err3.innerText = "Medium Password";
            err3.style.color = 'orange';
        } else {
            err3.innerText = "Poor Password (At least 8 characters required)";
            err3.style.color = 'red';
        }
        return true;
    } else {
        err3.innerText = "Please Enter a Valid Password";
        err3.style.color = 'red';
        return false;
    }
    
}
function validateConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var err4 = document.getElementById('err4');

    if (confirmPassword === '') {
        err4.innerText = "Please enter a password";
        err4.style.color = 'red';
        return false;
    } else if (password === confirmPassword) {
        err4.innerText = "Passwords match";
        err4.style.color = 'green';
        return true;
    } else {
        err4.innerText = "Passwords do not match";
        err4.style.color = 'red';
        return false;
    }
}




// Function to validate the entire form
function validateForm() {
    var isEmailValid = validateEmail();
    var isPhoneValid = validatePhoneNumber();
    var isPasswordValid = validatePassword();
    var isConfirmPasswordValid = validateConfirmPassword();
    if (isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        // All validations have passed, so display a success message
        alert("Account created successfully!");
        return true;
    } else {
        // Validation failed, do not submit the form
        return false;
    }
   
}