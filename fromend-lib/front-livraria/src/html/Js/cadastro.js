// Seleção dos elementos do DOM
const loginForm = document.querySelector('.login-form');
const nameInput = document.getElementById('name');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const termosCheckbox = document.getElementById('Termos');
const closeBtn = document.querySelector('.close-btn');

// Função para validação de campos
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio do formulário
  
  const nameValue = nameInput.value.trim();
  const loginValue = loginInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Verifica se os campos estão preenchidos
  if (!nameValue || !loginValue || !passwordValue || !termosCheckbox.checked) {
    alert('Por favor, preencha todos os campos e aceite os termos de uso.');
    return;
  }

  // Simulação de cadastro
  alert('Cadastro realizado com sucesso!');
  // Aqui você pode adicionar lógica para enviar os dados para o backend ou continuar o processo
});

// Função para fechar o formulário
closeBtn.addEventListener('click', () => {
  // Você pode adicionar a lógica para ocultar o formulário, por exemplo:
  document.querySelector('.login-container').style.display = 'none';
});
