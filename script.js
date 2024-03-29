let usernameInput = document.getElementById('username');
let usernameErrorDisplay = document.querySelector('.usernameError');

let emailInput = document.getElementById('email');
let emailErrorDisplay = document.querySelector('.emailError');

let passwordInput = document.getElementById('password');
let passwordErrorDisplay = document.querySelector('.passwordError');

let password2Input = document.getElementById('password2');
let password2ErrorDisplay = document.querySelector('.password2Error');

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if( usernameErrorDisplay.innerHTML === "" && emailErrorDisplay.innerHTML === "" && passwordErrorDisplay.innerHTML === "" && password2ErrorDisplay.innerHTML === "" )
    {
        usernameInput.value = "";
        emailInput.value = "";
        password2Input.value = "";
        passwordInput.value = "";
        usernameInput.style.border = "1px solid black";
        emailInput.style.border = "1px solid black";
        passwordInput.style.border = "1px solid black";
        password2Input.style.border = "1px solid black";

        alert("Created Account successfully");
    }
    else{
        alert("Please fill the form carefully");
    }
    
    
})

function validateUsername(){
    const name = usernameInput.value;
    const regex = /^[a-zA-Z]+$/;

    if(regex.test(name) === true)
    {
        usernameInput.style.border = "3px solid green";
        usernameErrorDisplay.innerHTML = "";
    }
    else{
        usernameInput.style.border = "3px solid red";
        usernameErrorDisplay.innerHTML = "Not a valid name*";

    }
}

usernameInput.addEventListener('input', validateUsername);
    
function validateEmail(){
    const email = emailInput.value;
    const regex = /^\S+@\S+\.\S+$/

    if(regex.test(email) === true)
    {
        emailInput.style.border = "3px solid green";
        emailErrorDisplay.innerHTML = "";
    }else{
        emailInput.style.border = "3px solid red";
        emailErrorDisplay.innerHTML = "Not a valid email*";
    }

}
emailInput.addEventListener('input', validateEmail);

function validatePassword(){
    const password = passwordInput.value;
    if(password.length < 6)
    {
        passwordInput.style.border = "3px solid red";
        passwordErrorDisplay.innerHTML = "min 6 character required*"
    }else
    {
        passwordInput.style.border = "3px solid green";
        passwordErrorDisplay.innerHTML = "";

    }

}
passwordInput.addEventListener('input', validatePassword);

function checkPassword2(){
    const password2 = password2Input.value;

    if(passwordInput.value === password2)
    {
        password2Input.style.border = "3px solid green";
        password2ErrorDisplay.innerHTML = "";
    }
    else{
        password2Input.style.border = "3px solid red"
        password2ErrorDisplay.innerHTML = "Incorrect password*"
    }

}
password2Input.addEventListener('input', checkPassword2);