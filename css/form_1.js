
const form = document.getElementById('form');







//window.onload=function(){ 
const strength = {
    0: "Worst ☹",
    1: "Bad ☹",
    2: "Weak ☹",
    3: "Good ☺",
    4: "Strong ☻"
}


const meter = document.getElementById('password-strength-meter');
const text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
    let val = password.value;
    let result = zxcvbn(val);
  
    // Update the password strength meter
    meter.value = result.score;
   
    // Update the text indicator
    if(val !== "") {
        text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span"; 
    }
    else {
        text.innerHTML = "";
    }
});


form.addEventListener('submit', function(e){
    
    if(!validateInputs()){
    e.preventDefault();
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


  

             
function isValidEmail() {
    const re = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    if(emailValue === '') {
        setError(email, 'Email is required');
        return false;
    }
    else if (re.test(String(emailValue).toLowerCase())) 
    {
        setSuccess(email);
        return true;
    }
    else {
        setError(email, 'Provide a valid email address');
        return false;
    }
      
}

function isValidphoneno() {
    const ph = /^([0-9]{10})+$/;
    const phoneno = document.getElementById('phoneno');
    const phoneValue = phoneno.value.trim();
    if(phoneValue === '') {
        setError(phoneno, 'Phone Number is required');
        return false;
    }
    else if (ph.test(String(phoneValue))) {
        setSuccess(phoneno);
        return true;
    } else {
        setError(phoneno, 'Provide a valid Phone Number');
        return false;
    }
}

function isValidpassword() {
    const pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    const password = document.getElementById('password');
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setError(password, 'Password is required');
        return false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
        return false;
    } else if (pwd.test(String(passwordValue))) {
        setSuccess(password);
        return true;
    }
    else {
        setError(password, 'Password must contain atleast one uppercase, one lowercase, one special character and one number');
        return false;
    }
     
}

function isMatchpassword() {
    const password2 = document.getElementById('password2');
    const password2Value = password2.value.trim();
    const password = document.getElementById('password');
    const passwordValue = password.value.trim();
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        return false;
    } 
    else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        return false;
    } else {
        setSuccess(password2);
        return true;
    } 
}

function isValidname() {
    const username = document.getElementById('username');
    const usernameValue = username.value.trim();
    if(usernameValue === '') {
        setError(username, 'Name is required');
        return false;
    } else {
        setSuccess(username);
        return true;
    }
}

const validateInputs = () => {
    var email_c = isValidEmail();
    var phone_c = isValidphoneno();
    var pswd_c = isValidpassword();
    var cpswd_c = isMatchpassword();
    var name_c = isValidname();
    if(isValidEmail() && isValidname() && isValidphoneno() && isValidpassword() && isMatchpassword()){
        return true;
    }
    else {
        return false;
    }
};
let parameters = {
    count : false,
    letters : false,
    numbers : false,
    special : false
  }
  let strengthBar = document.getElementById("strength-bar");
  
  function strengthChecker(){
    let password = document.getElementById("password").value;
  
    parameters.letters = (/[A-Za-z]+/.test(password))?true:false;
    parameters.numbers = (/[0-9]+/.test(password))?true:false;
    parameters.special = (/[!\"$%&/()=?@~`\\.\';:+=^*_-]+/.test(password))?true:false;
    parameters.count = (password.length > 7)?true:false;
  
    let barLength = Object.values(parameters).filter(value=>value);
  
    console.log(Object.values(parameters), barLength);
  
    strengthBar.innerHTML = "";
    for( let i in barLength){
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }
  
    let spanRef = document.getElementsByClassName("strength");
    for( let i = 0; i < spanRef.length; i++){
        switch(spanRef.length - 1){
            case 0 :
                spanRef[i].style.background = "#ff3e36";
                break;
            case 1:
                spanRef[i].style.background = "#ff691f";
                break;
            case 2:
                spanRef[i].style.background = "#ffda36";
                break;
            case 3:
                spanRef[i].style.background = "#0be881";
                break;
        }
    }
  }
  
  
  function toggle(){
    let password = document.getElementById("password");
    let eye = document.getElementById("toggle");
  
    if(password.getAttribute("type") == "password"){
        password.setAttribute("type","text");
        eye.style.color = "#062b61";
    }
    else{
        password.setAttribute("type","password");
        eye.style.color = "#6b6868";
    }
  };


    
    
    
    
    
    
    
    

    

    

    










