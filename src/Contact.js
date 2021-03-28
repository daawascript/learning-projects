const createContactForm = () => {
  const formContainer = document.createElement('section');
  document.body.appendChild(formContainer);
  formContainer.classList.add('container');
  formContainer.id = 'contact';

  const form = document.createElement('form');
  formContainer.appendChild(form);
  form.classList.add('form', 'column');

  const nameLabel = document.createElement('label');
  form.appendChild(nameLabel);
  nameLabel.innerText = "What's your name?";

  const nameInput = document.createElement('input');
  form.appendChild(nameInput);
  nameInput.type = 'text';

  const emailLabel = document.createElement('label');
  form.appendChild(emailLabel);
  emailLabel.innerText = "What's your email?";

  const emailInput = document.createElement('input');
  form.appendChild(emailInput);
  emailInput.type = 'email';

  const phoneLabel = document.createElement('label');
  form.appendChild(phoneLabel);
  phoneLabel.innerText = "What's your phone?";

  const phoneInput = document.createElement('input');
  form.appendChild(phoneInput);
  phoneInput.type = 'phone';

  const textAreaLabel = document.createElement('label');
  form.appendChild(textAreaLabel);
  textAreaLabel.innerText = 'What do you want to tell us?';

  const textArea = document.createElement('textarea');
  form.appendChild(textArea);
};

export default createContactForm;
