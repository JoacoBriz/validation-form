import './styles.css';
import {validation} from './js/validation';

// Referencias
const name = document.querySelector('#inputName'),
      email = document.querySelector('#inputEmail'),
      lastName = document.querySelector('#inputLastName'),
      phone = document.querySelector('#inputPhone'),
      message = document.querySelector('#inputMessage'),
      nameAlert = document.querySelector('#inputName-alert'),
      lastnameAlert = document.querySelector('#inputLastName-alert'),
      emailAlert = document.querySelector('#inputEmail-alert'),
      phoneAlert = document.querySelector('#inputPhone-alert'),
      messageAlert = document.querySelector('#textArea-alert'),
      allDivs = {nameAlert, lastnameAlert, emailAlert, phoneAlert, messageAlert};
      name.value = '';
      email.value = '';
      lastName.value = '';
      phone.value = '';
      message.value = '';

// Submit Event

submitButton.addEventListener('click',(event) => {
  event.preventDefault();
  validation(allDivs, name, email, lastName, phone, message);
});