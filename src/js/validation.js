const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
const numbers = /^ [0 - 9] + $/;


// // Texto
// const textError = document.createElement('p');
// textError.innerHTML = '';
// textError.classlist.add('text-error');


export const validation = (name, email, lastName, phone, message) => { 
  const nameTest = name.value.length === 0;
  const emailTest = email.value.length === 0 || !emailRegExp.test(email.value);
  const lastNameTest = lastName.value.length === 0;
  const phoneTest = phone.value.length === 0 || !numbers.test(phone.value);
  const messageTest = message.value.length === 0;

  if (nameTest) {
    name.className = "error";
    // textError.innerHTML = 'Add Name';
    // nameDiv.append(textError);
  };

  if(lastNameTest) {
    lastName.className = "error";
    // textError.innerHTML = 'Add Lastname';
    // lastnameDiv.append(textError);
  };

  if(emailTest) {
    email.className = "error";
    // textError.innerHTML = 'Add Email';
    // emailDiv.append(textError);
  };

  if(phoneTest) {
    phone.className = "error";
    // textError.innerHTML = 'Add Phone';
    // phoneDiv.append(textError);
  };

  if(messageTest) {
    message.className = "error-textarea";
    // textError.innerHTML = 'Add Message';
    // messageDiv.append(textError);
  };
  
  if (name.value.length > 0 && emailTest > 0 && lastName.value.length > 0 && numbers > 0 && message.value.length > 0) {
    alert('Datos enviados');
    name.value = '';
    email.value = '';
    lastName.value = '';
    phone.value = '';
    message.value = '';
  };

};