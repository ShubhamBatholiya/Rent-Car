const nameError=document.getElementById("name-error")
const lnameError=document.getElementById("lname-error")
const mobileError=document.getElementById("mobile-error")
const passwordError=document.getElementById("password-error")
const aadharError=document.getElementById("aadhar-error")
const ageError=document.getElementById("age-error")
const addressError=document.getElementById("address-error")

function formValidation(){

    if(validateName() & validateLname() & validateMobile() & validatePassword() & validateAadhar() & validateAge() ){
        return true;
    }

    else{
        return false;
    }
}

function validateName(){

    const name = document.getElementById('inputName').value;


    if(name.length<3){
        nameError.innerHTML = `<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>Name is very small</span>`
        return false;
    }

    if(name.length>10){
        nameError.innerHTML = "!name is very large"
        return false;
    }

    if(name.length==0){
        nameError.innerHTML = "!please enter your name"
        return false;
    }


    else{
        nameError.innerHTML = `<i class="fa-solid fa-circle-check mx-1" style="color: #00ff00;"></i>`;
        return true;
    }
}


function validateLname(){

    const lname = document.getElementById('inputLname').value;

    if(lname.length<3){
        lnameError.innerHTML = `<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>Name is very small</span>`
        return false;
    }

    if(lname.length>10){
        lnameError.innerHTML =`<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>!name is very large</span>`
        return false;
    }
    
    else{
        lnameError.innerHTML = `<i class="fa-solid fa-circle-check mx-1" style="color: #00ff00;"></i>`;
        return true;
    }
}

function validateMobile(){

    const mobile = document.getElementById('inputMobile').value;



    if(!mobile.match(/^\d{10}$/)){
        mobileError.innerHTML = `<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>Please enter 10 digits</span>`
        return false;
    }

    if(mobile.length>10){
        mobileError.innerHTML =`<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>!name is very large</span>`
        return false;
    }

    else{
        mobileError.innerHTML = `<i class="fa-solid fa-circle-check mx-1" style="color: #00ff00;"></i>`;
        return true;
    }
   
}


function validatePassword(){

    const password = document.getElementById('inputPassword').value;

    if(!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)){
        passwordError.innerHTML =`<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>!must include capital and small latter and a digit </span>`
        return false;
    }
    
    else{
        passwordError.innerHTML = `<i class="fa-solid fa-circle-check mx-1" style="color: #00ff00;"></i>`;
        return true;
    }
}


function validateAadhar(){

    const aadhar = document.getElementById('inputAadhar').value;

    if(!aadhar.match(/^\d{16}$/)){
        aadharError.innerHTML =`<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>!must include capital and small latter and a digit </span>`
        return false;
    }
    
    else{
        aadharError.innerHTML = `<i class="fa-solid fa-circle-check mx-1" style="color: #00ff00;"></i>`;
        return true;
    }
}


function validateAge(){

    const age = document.getElementById('inputAge').value;

    if(age<18){
        ageError.innerHTML =`<span class="mx-1"><i class="fa-sharp fa-solid fa-circle-exclamation mx-1" style="color: #ff0000;"></i>Age must be 18 plus </span>`
        return false;
    }
    
    else{
        ageError.innerHTML = `<i class="fa-solid fa-circle-check mx-1" style="color: #00ff00;"></i>`;
        return true;
    }
}



