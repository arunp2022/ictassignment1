
const form1 = document.getElementById('form1');
const email = document.getElementById('email');
const password = document.getElementById('password');


window.onload=function(){  

const text = document.getElementById('password-strength-text');


form1.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    
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


  

             
const isValidEmail = email => {
    const re = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    return re.test(String(email).toLowerCase());
}


const isValidpassword = password => {
    const pwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    return pwd.test(String(password));
}
const validateInputs = () => {
    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email');
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
}
}
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
    parameters.count = (password.length > 6)?true:false;
  
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
  };
