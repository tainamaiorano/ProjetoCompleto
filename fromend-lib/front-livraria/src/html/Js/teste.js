document.addEventListener('DOMContentLoaded', () => {
    // Estilos básicos para os elementos da página
    const body = document.body;
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.backgroundColor = '#f4f4f9';

    // Estilo do header
    const header = document.querySelector('header');
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.padding = '10px 20px';
    header.style.textAlign = 'center';

    // Estilos para o título da página
    const h1 = document.querySelector('h1');
    h1.style.fontSize = '2em';

    // Estilo do container principal
    const container = document.querySelector('.container');
    container.style.padding = '20px';
    container.style.maxWidth = '1200px';
    container.style.margin = '0 auto';
    
    // Estilo do botão "Adicionar Livro"
    const addBookBtn = document.getElementById('addBookBtn');
    addBookBtn.style.padding = '10px 20px';
    addBookBtn.style.backgroundColor = '#4CAF50';
    addBookBtn.style.color = 'white';
    addBookBtn.style.border = 'none';
    addBookBtn.style.borderRadius = '5px';
    addBookBtn.style.cursor = 'pointer';
    addBookBtn.style.marginBottom = '20px';
    addBookBtn.addEventListener('hover', () => {
        addBookBtn.style.backgroundColor = '#45a049';
    });

    // Estilos para a tabela
    const booksTable = document.getElementById('booksTable');
    booksTable.style.width = '100%';
    booksTable.style.borderCollapse = 'collapse';
    booksTable.style.marginBottom = '20px';

    const tableHeaders = booksTable.querySelectorAll('th');
    tableHeaders.forEach(header => {
        header.style.backgroundColor = '#333';
        header.style.color = '#fff';
        header.style.padding = '10px';
        header.style.textAlign = 'left';
    });

    const tableCells = booksTable.querySelectorAll('td');
    tableCells.forEach(cell => {
        cell.style.padding = '10px';
        cell.style.border = '1px solid #ddd';
    });

    // Estilo para o modal
    const modal = document.getElementById('bookModal');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    const modalContent = document.querySelector('.modal-content');
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.width = '400px';

    const modalTitle = document.getElementById('modalTitle');
    modalTitle.style.fontSize = '1.5em';
    modalTitle.style.marginBottom = '20px';

    const formInputs = document.querySelectorAll('#bookForm input');
    formInputs.forEach(input => {
        input.style.width = '100%';
        input.style.padding = '10px';
        input.style.marginBottom = '10px';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '5px';
    });

    const modalButtons = document.querySelectorAll('#bookForm button');
    modalButtons.forEach(button => {
        button.style.padding = '10px 20px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
    });

    // Estilo para o botão "Fechar" no modal
    const closeModalBtn = document.getElementById('closeModalBtn');
    closeModalBtn.style.backgroundColor = '#f44336';
    closeModalBtn.style.color = 'white';
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Exibir o modal ao clicar no botão "Adicionar Livro"
    addBookBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});
