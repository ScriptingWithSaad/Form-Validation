let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required*";
        return false;
    }
    if (!name.match(/^[a-zA-Z\s]+$/)) {
        nameError.innerHTML = "Name Should Contain Letters and Spaces only";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}



function validatephone() {
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required*";
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = "phone no should be 10 digits";
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits Please...";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateemail(){
    let email = document.getElementById("contact-email").value;

    if (email.length == 0){
        emailError.innerHTML = 'Email is required*';
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    emailError.innerHTML = 'Please enter a valid email address';
    return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validatemessage(){
    let message = document.getElementById("contact-message").value;

    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = 'you have ' + left +  ' characters left';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateform(){
    if(!validateName() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill all required fields';
        setTimeout(function(){submitError.style.display = 'none'},3000)
        return false;
    }
}