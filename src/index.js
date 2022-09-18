import './styles.css';
import {validation} from './js/validation';

// Referencias

const name = document.querySelector('#inputName'),
      email = document.querySelector('#inputEmail'),
      lastName = document.querySelector('#inputLastName'),
      phone = document.querySelector('#inputPhone'),
      message = document.querySelector('#inputMessage');
name.value = '';
email.value = '';
lastName.value = '';
phone.value = '';
message.value = '';

// const nameDiv = document.querySelector('#name-div'),
//       lastnameDiv = document.querySelector('#lastname-div'),
//       emailDiv = document.querySelector('#email-div'),
//       phoneDiv = document.querySelector('#phone-div'),
//       messageDiv = document.querySelector('#message-div'),
//       allDivs = {nameDiv, lastnameDiv, emailDiv, phoneDiv, messageDiv};

// Submit Event

submitButton.addEventListener('click',(event) => {
  event.preventDefault;
  validation(name, email, lastName, phone, message);
})