function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// on recupere les elements dont on aura besoin 
const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");


const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalClose = document.querySelector(".close");
const submitButton = document.querySelector(".btn-submit");

const formModal = document.getElementById('main-modal');
const thanksModal = document.getElementById('confirmation-modal');
const thanksCloseBtn = document.querySelectorAll('.thanksClose');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formModal.style.display = 'block';
}



// close modal event
modalClose.addEventListener("click", closeFormModal);

thanksCloseBtn.forEach((btn) => btn.addEventListener('click', () => {
  modalbg.style.display = 'none'
  thanksModal.style.display = 'none'
}));

// close modal form
function closeFormModal () {
  modalbg.style.display = 'none';
  formModal.style.display = 'none';
}
// launch thanks Modal
function openThanksModal () {
  modalbg.style.display = 'block';
  thanksModal.style.display = 'flex';
}

// inputs validation functions 

function FirstNameValidation() {
const inputValue = firstNameInput.value;
  // on verifie que l'input est non null et qu'il contient plus de 2 caracteres
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}

function LastNameValidation() {
  let inputValue = lastNameInput.value;
  if (inputValue !== null && inputValue.length > 2) return true;
  else return false;
}

function emailValidation() { 
  const mailFormat = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  const inputValue = document.getElementById("email").value;
  // on verifie que l'input correspond au format d'une adresse mail
  if (mailFormat.test(inputValue)) {
    return true;
  }
  else {
    return false;
  };
}

function BirthdateValidation() {
  let Value = document.getElementById("birthdate").value;
  //on verifie que l'input correspond au format d'une date
  if (dateIsValid(new Date(Value))) {
    return true;
  }
  else {
    return false;
  };
}

function dateIsValid(date) {
  return date instanceof Date && !isNaN(date);
}


function quantityValidation() {
  const Value = document.getElementById("quantity").value;
  const numbers = /^[0-9]+$/;
  // on verifie que l'input correspond au format d'un nombre
  if (numbers.test(Value)) {
    return true;
  }
  else {
    return false;
  }
}
function locationValidation() {
  const loc1 = document.getElementById ('location1');
  const loc2 = document.getElementById ('location2');
  const loc3 = document.getElementById ('location3');
  const loc4 = document.getElementById ('location4');
  const loc5 = document.getElementById ('location5');
  const loc6 = document.getElementById ('location6');
  // on vérifie si aucune ville n'est cochée
  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
    return false;
  }
  else return true;

}

function checkboxValidation() {
  const checkbox1 = document.getElementById("checkbox1");
  // on verifie si la case des conditions d'utilisation est cochée
  if (!checkbox1.checked) {
    return false
  }
  else return true;
}

// on créé les différents messages d'erreur
const errorMessages = {
	lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate:
		"Veuillez entrer une date de naissance au format JJ/MM/AAAA.",
	quantity: "Veuillez entrer un nombre valide.",
	location: "Veuillez choisir une ville.",
	checkbox: "Veuillez accepter les conditions d'utilisations.",
};

// function submit du formulaire lors du click sur le bouton

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  let isValidInput = true;
  // on verifie pour chaque input que l'information saisie est conforme sinon on affiche le message d'erreur pour cet input
  if (!FirstNameValidation()) {
		isValidInput = false;
    // si la validation renvoie false alors on affiche le message d'erreur et le changement de style du champ
    firstNameInput.parentElement.setAttribute( "data-error", errorMessages.firstName);
    firstNameInput.parentElement.setAttribute( "data-error-visible",true);
    
	}
  else firstNameInput.parentElement.setAttribute( "data-error-visible",false);
	if (!LastNameValidation()) {
		isValidInput = false;
    lastNameInput.parentElement.setAttribute( "data-error", errorMessages.lastName);
    lastNameInput.parentElement.setAttribute( "data-error-visible",true);
	}
  else lastNameInput.parentElement.setAttribute( "data-error-visible",false);
  if (!emailValidation()) {
		isValidInput = false;
    emailInput.parentElement.setAttribute( "data-error", errorMessages.email);
    emailInput.parentElement.setAttribute( "data-error-visible",true);
    
	}
  else emailInput.parentElement.setAttribute( "data-error-visible",false);
  if (!BirthdateValidation()) {
		isValidInput = false;
    birthdateInput.parentElement.setAttribute( "data-error", errorMessages.birthdate);
    birthdateInput.parentElement.setAttribute( "data-error-visible",true);
    
	}
  else birthdateInput.parentElement.setAttribute( "data-error-visible",false);
  if (!quantityValidation()) {
		isValidInput = false;
    quantityInput.parentElement.setAttribute( "data-error", errorMessages.quantity);
    quantityInput.parentElement.setAttribute( "data-error-visible",true);
    
	}
  else quantityInput.parentElement.setAttribute( "data-error-visible",false);
  if (!locationValidation()) {
		isValidInput = false;
    radioButtons[0].parentElement.setAttribute( "data-error", errorMessages.location);
    radioButtons[0].parentElement.setAttribute( "data-error-visible",true);
    
	}
  else radioButtons[0].parentElement.setAttribute( "data-error-visible",false);
  if (!checkboxValidation()) {
		isValidInput = false;
    checkboxInput.parentElement.setAttribute( "data-error", errorMessages.checkbox);
    checkboxInput.parentElement.setAttribute( "data-error-visible",true);
    
	}
  else checkboxInput.parentElement.setAttribute( "data-error-visible",false);

  
// si toutes les informations sont correctes on ferme le modal formulaire, on ouvre celui de remerciement et on reset les entrées du formulaire
  if (isValidInput) {
    closeFormModal();
    openThanksModal();
    form.reset();
  }
// sinon on empeche l'evenement de se derouler
  else e.preventDefault();
  
    
    
  
})




