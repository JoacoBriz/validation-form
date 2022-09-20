const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
const numbers = /^ [0 - 9] + $/;


export const validation = ({nameAlert, lastnameAlert, emailAlert, phoneAlert, messageAlert}, name, email, lastName, phone, message) => { 
  const nameTest = name.value.length === 0;
  const lastNameTest = lastName.value.length === 0;
  const emailTest = email.value.length === 0 || emailRegExp.test(email.value);
  const phoneTest = phone.value.length === 0 || numbers.test(phone.value);
  const messageTest = message.value.length === 0;

  nameTest ? (name.className = "error", nameAlert.style.display = 'block') : (name.className = "form-name-input-success", nameAlert.style.display = 'none');

  lastNameTest ? (lastName.className = "error", lastnameAlert.style.display = 'block') : (lastName.className = "form-name-input-success", lastnameAlert.style.display = 'none');

  emailTest ? (email.className = "error", emailAlert.style.display = 'block') : (email.className = "form-name-input-success", emailAlert.style.display = 'none');

  phoneTest ? (phone.className = "error", phoneAlert.style.display = 'block') : (phone.className = "form-name-input-success", phoneAlert.style.display = 'none');

  messageTest ? (message.className = "error-textarea", messageAlert.style.display = 'block') : (message.className = "form-message-success", messageAlert.style.display = 'none');
  
  if (name.value.length > 0 && !emailTest > 0 && lastName.value.length > 0 && !phoneTest > 0 && message.value.length > 0) {
    
    alert('Datos Enviados');
  };

};