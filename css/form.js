
const form = document.getElementById('form');
const username = document.getElementById('username');
const phoneno = document.getElementById('phoneno');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


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
    const val = password.value;
    const result = zxcvbn(val);
  
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


//function isValidEmail() {
   // console.log("function called");
   // const re = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
   // const email = document.getElementById('email');
   // const emailValue = email.value.trim();
  //  if(emailValue === '') {
   //     setError(email, 'Email is required');
  //      return false;
   // }
   // else if (re.test(String(emailValue).toLowerCase())) 
   // {
   //     setSuccess(email);
   //     console.log("match");
   //     return true;
    //}
  //  else {
   //     setError(email, 'Provide a valid email address');
   //     return false;
    //}
      
//}

             
const isValidEmail = email => {
    const re = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    return re.test(String(email).toLowerCase());
}

const isValidphoneno = phoneno => {
    const ph = /^([0-9]{10})+$/;
    return ph.test(String(phoneno));
}

const isValidpassword = password => {
    const pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    return pwd.test(String(password));
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phoneno.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if(phoneValue === '') {
        setError(phoneno, 'Phone Number is required');
    } else if (!isValidphoneno(phoneValue)) {
        setError(phoneno, 'Provide a valid Phone Number');
    } else {
        setSuccess(phoneno);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else if (!isValidpassword(passwordValue)) {
        setError(password, 'Password must contain atleast one uppercase, one lowercase, one special character and one number');
    }
    else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        var ok = true;
    } 
    console.log(isValidEmail, isValidphoneno, isValidpassword)
    if(isValidEmail && isValidphoneno && isValidpassword) {
        //return true;

    }
    else {
        return false;
    }
};   









