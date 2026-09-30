// 1. Seleciona o contêiner central da SPA
const app = document.getElementById('app');

// 2. Mapeamento das rotas
const rotas = {
  '#/': templateHome,
  '#': templateHome,
  '': templateHome,
  '#/projetos': templateProjetos,
  '#/cadastro': templateCadastro
};

// 3. Função orquestradora de roteamento
function navegar() {
  const hash = window.location.hash || '#/';
  const renderizarTela = rotas[hash] || templateHome;

  // Atualiza o DOM
  app.innerHTML = renderizarTela();

  // Se estiver na tela de cadastro, inicializa os ouvintes do formulário
  if (hash === '#/cadastro') {
    inicializarFormulario();
  }
}

// 4. Mapeamento de interações, validação e persistência
function inicializarFormulario() {
  const form = document.querySelector('#formCadastro');
  const feedback = document.querySelector('#mensagemFeedback');

  if (!form) return;

  form.addEventListener('submit', (evento) => {
    // Evita o recarregamento da página (comportamento padrão do form)
    evento.preventDefault();

    // Captura dos elementos e valores
    const nome = document.querySelector('#nome').value.trim();
    const email = document.querySelector('#email').value.trim();
    const telefone = document.querySelector('#telefone').value.trim();
    const endereco = document.querySelector('#endereco').value.trim();

    // Validação de consistência
    if (!nome || !email || !telefone || !endereco) {
      feedback.textContent = '[ERRO] Por favor, preencha todos os campos obrigatórios!';
      feedback.style.color = 'var(--cor-erro)';
      feedback.style.fontWeight = 'bold';
      return;
    }

    // Estruturação do objeto
    const novoVoluntario = {
      id: Date.now(),
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: endereco,
      data: new Date().toLocaleDateString('pt-BR')
    };

    // Leitura e persistência no localStorage com JSON
    let lista = JSON.parse(localStorage.getItem('voluntarios_ong')) || [];
    lista.push(novoVoluntario);
    localStorage.setItem('voluntarios_ong', JSON.stringify(lista));

    // Feedback visual seguro via textContent (proteção contra XSS)
    feedback.textContent = `Cadastro de ${nome} realizado com sucesso! Dados salvos no navegador.`;
    feedback.style.color = 'var(--cor-sucesso)';
    feedback.style.fontWeight = 'bold';

    // Limpeza dos campos
    form.reset();
  });
}

// 5. Escuta de eventos para disparo da navegação
window.addEventListener('hashchange', navegar);
window.addEventListener('DOMContentLoaded', navegar);