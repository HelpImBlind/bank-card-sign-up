// Fixed JS
const nameInput = document.getElementById('input_cardName');
const numberInput = document.getElementById('input_cardNumber');
const monthInput = document.getElementById('input_cardDateMonth');
const yearInput = document.getElementById('input_cardDateYear');
const cvcInput = document.getElementById('input_cardCVC');

const nameCardDisplay = document.getElementById('cardholder_Name');
const numberCardDisplay = document.getElementById('cardholder_Number');
const monthYearCardDisplay = document.getElementById('cardholder_Date');
const cvcCardDisplay = document.getElementById('cardholder_CVC');

const confirmButton = document.getElementById('confirmBtn');
const returnButton = document.getElementById('returnBtn');

const cardForm = document.querySelector('.sect_DetailsContainer');
const thankYouSection = document.querySelector('.sect_ThankYou');

numberInput.addEventListener('input', cardNumberSpaces);
nameInput.addEventListener('input', updateCard);
numberInput.addEventListener('input', updateCard);
monthInput.addEventListener('input', updateCard);
yearInput.addEventListener('input', updateCard);
cvcInput.addEventListener('input', updateCard);

confirmButton.addEventListener('click', validateCardInputs);
returnButton.addEventListener('click', returnForm);

function cardNumberSpaces() {
  let raw = numberInput.value.replace(/\s/g, '');
  let formatted = '';
  for (let i = 0; i < raw.length; i++) {
    if (i > 0 && i % 4 === 0) formatted += ' ';
    formatted += raw[i];
  }
  numberInput.value = formatted;
}

function updateCard() {
  nameCardDisplay.innerText = nameInput.value.toUpperCase();
  numberCardDisplay.innerText = numberInput.value;
  monthYearCardDisplay.innerText = `${monthInput.value} / ${yearInput.value}`;
  cvcCardDisplay.innerText = cvcInput.value;
}

function validateCardInputs(event) {
    event.preventDefault();
  
    let valid = true;
  
    const nameValueError = document.getElementById('cardNameError');
    const numberValueError = document.getElementById('cardNumberError');
    const dateValueError = document.getElementById('cardDateError');
    const cvcValueError = document.getElementById('cardCvcError');
  
    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
      nameValueError.innerText = 'Wrong format, letters only';
      nameInput.style.border = '2px solid var(--error-font-clr)';
      valid = false;
    } else {
      nameValueError.innerText = '';
      nameInput.style.border = '2px solid grey';
    }
  
    const rawNumber = numberInput.value.replace(/\s/g, '');
    if (rawNumber.length !== 16 || isNaN(rawNumber)) {
      numberValueError.innerText = 'Wrong format, numbers only';
      numberInput.style.border = '2px solid var(--error-font-clr)';
      valid = false;
    } else {
      numberValueError.innerText = '';
      numberInput.style.border = '2px solid grey';
    }
  
    if (monthInput.value.length !== 2 || isNaN(monthInput.value) ||
        yearInput.value.length !== 2 || isNaN(yearInput.value)) {
      dateValueError.innerText = 'Wrong format, numbers only';
      monthInput.style.border = yearInput.style.border = '2px solid var(--error-font-clr)';
      valid = false;
    } else {
      dateValueError.innerText = '';
      monthInput.style.border = yearInput.style.border = '2px solid grey';
    }
  
    if (cvcInput.value.length !== 3 || isNaN(cvcInput.value)) {
      cvcValueError.innerText = 'Wrong format, numbers only';
      cvcInput.style.border = '2px solid var(--error-font-clr)';
      valid = false;
    } else {
      cvcValueError.innerText = '';
      cvcInput.style.border = '2px solid grey';
    }
  
    if (valid) {
      cardForm.reset();
      displayThankYou(); 
    }
  }
  
  function displayThankYou() {
    cardForm.style.display = 'none';
    thankYouSection.style.display = 'block';
  }
  
  function returnForm() {
    cardForm.style.display = 'block';
    thankYouSection.style.display = 'none';
  
    nameCardDisplay.innerText = '';
    numberCardDisplay.innerText = '';
    monthYearCardDisplay.innerText = '';
    cvcCardDisplay.innerText = '';
  }
  