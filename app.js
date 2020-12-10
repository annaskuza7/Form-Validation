// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z\s]{2,20}$/;

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{2}(-)[0-9]{3}$/;

  if(!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^[0-9]{3}(-)[0-9]{3}$/;

  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}


// // Shorter
// const validateInputFields = [
//   { field: 'name', regex: /^[a-zA-Z\s]{2,20}$/ },
//   { field: 'zip', regex: /^[0-9]{2}(-)[0-9]{3}$/ },
//   { field: 'email', regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ },
//   { field: 'phone', regex: /^[0-9]{3}(-)[0-9]{3}$/ }
// ];

// function validateRule(inputName, reg) {
//   const name = document.getElementById(inputName);
//   const re = reg;

//   if(!re.test(name.value)) {
//     name.classList.add('is-invalid');
//   } else {
//     name.classList.remove('is-invalid');
//   }
// }

// validateInputFields.forEach(data => {
//   const { field, regex } = data;

//   document.getElementById(field).addEventListener('blur', () => validateRule(field, regex))
// });
