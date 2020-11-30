//selectors
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');


//Event Handlers
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

//Functions
function checkInput(){
    const usernameValue = username.value.trim();
    
    const emailValue = email.value.trim();
    
    const password1Value = password1.value.trim();
    
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        showError(username,"Username cannot be blank");

    }
    else if(!isUsernameValid(usernameValue)){
        showError(username,"Username is not valid");
    }
    else{
        showSuccess(username);
    }
    
    if(emailValue === ''){
        showError(email,"Email cannot be blank");
    }
    else if(!isEmailValid(emailValue)){
        showError(email,"Email ID is not valid");
    }
    else{
        showSuccess(email);
    }

    
    if(password1Value === ''){
        showError(password1,"Password cannot be blank");

    }
    else{
        showSuccess(password1);
    }

    
    if(password2Value === ''){
        showError(password2,"Password  cannot be blank");

    }
    else if(password2Value != password1Value){
        showError(password2,"Password doesn't match");
    }
    else{
        showSuccess(password2);
    }
}

function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className= 'form-control success'; 
}

function isEmailValid(email){
    return /^([a-zA-Z0-9\.\-\+]+)@([a-zA-Z0-9\.\-\+]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username){
    return /^([a-z]+)$/.test(username);
}