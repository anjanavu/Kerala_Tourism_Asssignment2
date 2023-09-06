function validateEmail() {
    var email = document.getElementById('email').value;
    var err1 = document.getElementById('err1');
    var regexp = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;

    if (!regexp.test(email)) {
        err1.innerText = "Please enter a Valid Email ";
        err1.style.color = 'red';
        return false;

    } else {
        err1.innerText = " ";
        return true;

    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var err2 = document.getElementById('err2');
    var regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regexp1.test(password)) {
        err2.innerText = "Please enter a Valid Password";
        err2.style.color = 'red';
        return false;

    } else {

        err2.innerText = " ";
        return true;
    }
}

function validateForm() {
    var isEmailValid = validateEmail();
    var isPasswordValid = validatePassword();
    if (isEmailValid && isPasswordValid) {
        // Both email and password are valid, so display a success message
        alert("Successfully logged in!");
        return true;
    } else {
        // Validation failed, do not submit the form
        return false;
    }
}
