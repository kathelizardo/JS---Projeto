//////ANIMAÇÃO TITULO////
let titulo1 = "Eng. Katherine Lizardo";
let msgCount = 0;
let timer1;
let tituloBanner = document.getElementById("tituloBanner");

function textFunc() {
   tituloBanner.innerHTML = titulo1.substring(0, msgCount);   
   if (msgCount == titulo1.length) {
      // Stop Timer
      clearInterval(timer1);
      
   } else {
      msgCount++;
   }
}

timer1 = setInterval("textFunc()", 60); // Every 150 milliseconds



///// NavBar////

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



///////VALIDAÇÃO EMAIL/////

function validateEmail(e){
    let field = e.target;
    let fieldValue = field.value;

    if (fieldValue.search('@') == -1) {
        displayError('Email não é válido', field);
    }else {
        clearError(field);
    }

    field.classList.remove('not-validated');
    checkEnableSubmit();
}

///////VALIDAÇÃO CAMPO VAZIO/////
function validateNotEmpty(e) {
    let field = e.target;
    let fieldValue = field.value;

    if (fieldValue == '') {
        displayError('Campo não pode ser vazio', field);
    }else {
        clearError(field);
    }

    field.classList.remove('not validated');
    checkEnableSubmit();
}

function displayError(message, field) {
    clearError(field);
    field.classList.add('is-invalid');
    let error = document.createElement('small');
    error.style.color ='red';
    error.classList.add('error-message');
    error.textContent = message;
    field.parentElement.appendChild(error);
}

function clearError(field) {
    let container = field.parentElement;
    let error = container.querySelector ('.error-message');
    if (error) {
        container.removeChild(error);
    }
    field.classList.remove ('is-invalid');
}

function checkEnableSubmit() {
    let form = document.querySelector('#form');
    let notValidated = form.querySelectorAll('.not-validated');
    let error = form.querySelectorAll('.is-valid');

    if (error.length == 0 && notValidated.length == 0){
        enableSubmit();
    }else {
        disableSubmit();
    }
}

function enableSubmit () {
    let form = document.querySelector('#form');
    let submit = form.querySelector('[type=submit]');

    submit.disabled = false;
}
function disableSubmit () {
    let form = document.querySelector ('#form');
    let submit = form.querySelector('[type=submit]');
    submit.disabled = true;
}

document.querySelectorAll('input').forEach(el => el.classList.add ('no-validated'));
document.querySelectorAll ('input.email').forEach(el => el.addEventListener('keyup', validateEmail));
document.querySelectorAll ('input:required').forEach(el => el.addEventListener('keyup', validateNotEmpty));


