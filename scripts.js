const projects = [
    {
        title: 'Projeto 1',
        description: 'Descrição do Projeto 1.',
        status: 'Concluído',
        link: 'https://www.example.com/projeto1'
    },
    {
        title: 'Projeto 2',
        description: 'Descrição do Projeto 2.',
        status: 'Concluído',
        link: 'https://www.example.com/projeto1'
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