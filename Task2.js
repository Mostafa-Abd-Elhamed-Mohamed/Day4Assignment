document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var valid = true;

    var name = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (name.value.trim().length <= 4) {
        name.classList.add("invalid");
        nameError.innerText = "name length must be > 4 varters";
        valid = false;
    } else {
        name.classList.remove("invalid");
        nameError.innerText = "";
    }

    var pass = document.getElementById("pass");
    var passError = document.getElementById("passError");
    if (pass.value.trim().length <= 8) {
        pass.classList.add("invalid");
        passError.innerText = "pass length must be > 8 varters";
        valid = false;
    } else {
        pass.classList.remove("invalid");
        passError.innerText = "";
    }

    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("invalid");
        emailError.innerText = "mail not valid";
        valid = false;
    } else {
        email.classList.remove("invalid");
        emailError.innerText = "";
    }

    var genderError = document.getElementById("genderError");
    var genderChecked = document.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
        genderError.innerText = "choose your gender";
        valid = false;
    } else {
        genderError.innerText = "";
    }

    var sportError = document.getElementById("sportError");
    var sportChecked = document.querySelectorAll('input[name="sport"]:checked');
    if (sportChecked.length === 0) {
        sportError.innerText = "choose your sport";
        valid = false;
    } else {
        sportError.innerText = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
    }
});