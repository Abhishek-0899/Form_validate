const form = document.getElementById("form")
const username = document.getElementById("Username")
const Email = document.getElementById("Email")
const Password = document.getElementById("Password")
const Confirm_Passord = document.getElementById("Confirm_Passord")
const submit = document.getElementById("btn")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateDetails();
});


const validateDetails = () => {
    const usernameValue = username.value.trim();
    const emailValue = Email.value.trim();
    const passwordValue = Password.value.trim();
    const Confirm_PassordValue = Confirm_Passord.value.trim();

    if (usernameValue === "") {
        setError(username, "Username is required")
    } else {
        setSuccess(username)
    }

    if(emailValue ===""){
        setError(Email,"Email is required")
    }else if(!validateEmail(Email)){
        setError(Email,"Provide a valid email address")   
    }
    else{
        setSuccess(Email)
    }
    if (passwordValue === "") {
        setError(Password, "Password is required")
    }
    else if (passwordValue.length < 8) {
        setError(Password, "Password should be more than 8 characters");
    }
    else {
        setSuccess(Password);
    }
    if (Confirm_Passord === "") {
        setError(Confirm_Passord, "see password is required")
    }
    else if (passwordValue !== passwordValue || passwordValue.length !== Confirm_PassordValue.length) {
        setError(Confirm_Passord, "Password doesn't match");
    }
    else {
        setSuccess(Confirm_Passord);
    }
}


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove("Success")

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = " ";

    inputControl.classList.add("success")
    inputControl.classList.remove("error")
}


function validateEmail(e){
    var reg = `[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}`
    return reg;
}