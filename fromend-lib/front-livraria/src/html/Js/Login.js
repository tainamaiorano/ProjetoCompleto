// Seleção dos elementos do DOM
const loginForm = document.querySelector('.login-form');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const closeBtn = document.querySelector('.close-btn');

// Função para validação de login e senha
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio do formulário
  
  const loginValue = loginInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  
  // Verifica se os campos estão preenchidos
  if (!loginValue || !passwordValue) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Simulação de login
  alert('Login realizado com sucesso!');
  // Aqui você pode adicionar lógica para autenticar o usuário (por exemplo, enviar para o backend)
});

// Função para fechar o formulário de login
closeBtn.addEventListener('click', () => {
  // Você pode adicionar a lógica para ocultar o formulário, por exemplo:
  document.querySelector('.login-container').style.display = 'none';
});
