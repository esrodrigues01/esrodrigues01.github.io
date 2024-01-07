const projects = [
    {
        title: 'Projeto 1',
        description: 'Brazilian E-Commerce Public Dataset by Olist Welcome! This is a Brazilian ecommerce public dataset of orders made at Olist Store. The dataset has information of 100k orders from 2016 to 2018 made at multiple marketplaces in Brazil. Its features allows viewing an order from multiple dimensions: from order status, price, payment and freight performance to customer location, product attributes and finally reviews written by customers.',
        status: 'Concluído',
        link: 'https://github.com/esrodrigues01/Data-Scientist/tree/main/Projeto%201%20-%20Data%20Science%20do%20zero%20-%20Olist'
    },
    {
        title: 'Projeto 2',
        description: 'Análise de dados com dados gerados por um banco de dados, usando python e SQL" "Dados de Pesquisas eleitorais compiladas pelo poder360.',
        status: 'Concluído',
        link: 'https://github.com/esrodrigues01/Data-Scientist/tree/main/Projeto%202%20-%20Elei%C3%A7%C3%B5es%20brasileiras'
    },
     {
        title: 'Projeto 3',
        description: 'Análise Descritiva para geração de insight',
        status: 'Concluído',
        link: 'Código-fonte de uma análise de dados com dados gerados por um arquivo em .CSV, usando python" "Este conjunto de dados inclui preços e variação percentual de preço para lã grossa, copra, algodão, lã fina, dura longa, madeira serrada dura, couro, madeira compensada, borracha, toras macias, madeira serrada macia e celulose de madeira.'
    },
     {
        title: 'Projeto 4',
        description: 'Análise de dados com dados gerados por um banco de dados, usando python e SQL" "Dados de Pesquisas eleitorais compiladas pelo poder360.',
        status: 'Concluído',
        link: 'https://github.com/esrodrigues01/Data-Scientist/tree/main/Projeto%202%20-%20Elei%C3%A7%C3%B5es%20brasileiras'
    },
     {
        title: 'Projeto 5',
        description: 'Análise de dados com dados gerados por um banco de dados, usando python e SQL" "Dados de Pesquisas eleitorais compiladas pelo poder360.',
        status: 'Concluído',
        link: 'https://github.com/esrodrigues01/Data-Scientist/tree/main/Projeto%202%20-%20Elei%C3%A7%C3%B5es%20brasileiras'
    },
     {
        title: 'Projeto 6',
        description: 'Análise de dados com dados gerados por um banco de dados, usando python e SQL" "Dados de Pesquisas eleitorais compiladas pelo poder360.',
        status: 'Concluído',
        link: 'https://github.com/esrodrigues01/Data-Scientist/tree/main/Projeto%202%20-%20Elei%C3%A7%C3%B5es%20brasileiras'
    },
     {
        title: 'Projeto 7',
        description: 'Análise de dados com dados gerados por um banco de dados, usando python e SQL" "Dados de Pesquisas eleitorais compiladas pelo poder360.',
        status: 'Concluído',
        link: 'https://github.com/esrodrigues01/Data-Scientist/tree/main/Projeto%202%20-%20Elei%C3%A7%C3%B5es%20brasileiras'
    },
     {
        title: 'Projeto 8',
        description: '',
        status: 'Concluído',
        link: ''
    },
     {
        title: 'Projeto 9',
        description: '',
        status: 'Concluído',
        link: ''
    },
     {
        title: 'Projeto 10',
        description: '',
        status: 'Concluído',
        link: ''
    },
    
    // Adicione outros projetos conforme necessário
];

const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalStatus = document.getElementById('modal-status');
const modalLink = document.getElementById('modal-link');

const projectButtons = document.querySelectorAll('.details-btn');

projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const projectId = button.getAttribute('data-project');
        const project = projects[projectId - 1];

        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalStatus.textContent = `Status: ${project.status}`;
        modalLink.href = project.link;

        modal.style.display = 'block';
    });
});

const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});