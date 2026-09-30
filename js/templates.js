/**
 * js/templates.js
 * Componentes e templates dinâmicos gerados via Template Literals
 */

// 1. Coleção de iniciativas e projetos da ONG
const listaProjetos = [
  {
    titulo: "Assessoria Jurídica",
    texto: "Documentos legais relativos à cidadania brasileira, repatriação e consultoria tributária."
  },
  {
    titulo: "Aulas de Português",
    texto: "Aulas práticas de conversação para o dia a dia, treinamento na leitura e escrita, além do conhecimento de expressões populares."
  },
  {
    titulo: "Ponte para o Trabalho",
    texto: "Capacitação profissional, elaboração de currículos e mediação direta com as empresas parceiras."
  }
];

// 2. Template: Tela de Início (Home)
function templateHome() {
  return `
    <section class="secao">
      <h2>Quem Somos:</h2>
      <p>Com o propósito de ajudar imigrantes e estimular a inclusão social e trabalho digno, a <b>ONG AMIGOS SEM FRONTEIRAS</b> é uma organização sem fins lucrativos dedicada a acolher, orientar e integrar imigrantes haitianos que procuram reconstruir suas vidas. Acreditamos que a diversidade cultural fortalece a sociedade e que o acesso a direitos básicos é universal.</p>
      
      <figure class="secao__imagem">
        <picture>
          <source srcset="img/acolhimento.webp" type="image/webp">
          <img src="img/acolhimento.jpg" alt="Voluntários da ONG Amigos Sem Fronteiras acolhendo uma família de imigrantes na sede" width="600" height="400">
        </picture>
      </figure>

      <div class="grid-cards">
        <article class="card">
          <h3 class="card__titulo">Nossa Missão</h3>
          <p class="card__texto">Facilitar a transição e inclusão de imigrantes através de assessoria jurídica, aulas de língua e mediação no mercado de trabalho.</p>
        </article>
        <article class="card">
          <h3 class="card__titulo">Nossa Visão</h3>
          <p class="card__texto">Ser uma rede de referência no acolhimento humanizado, garantindo que qualquer pessoa migrante encontre dignidade, segurança e autonomia.</p>
        </article>
        <article class="card">
          <h3 class="card__titulo">Nossos Valores</h3>
          <p class="card__texto">Empatia, hospitalidade, respeito pela diversidade, equidade social e compromisso ético.</p>
        </article>
      </div>
    </section>

    <section class="secao">
      <h2>Contato</h2>
      <p>Fale com a nossa equipe para informações ou dúvidas:</p>
      <address class="contato__dados">
        <p><strong>E-mail:</strong> contato@amigossemfronteiras.org.br</p>
        <p><strong>Telefone / WhatsApp:</strong> (77) 2409-2026</p>
        <p><strong>Endereço:</strong> Rua Solidariedade, 100 — Centro, Imbituba/SC</p>
      </address>
    </section>
  `;
}

// 3. Template: Tela de Projetos (Geração dinâmica via .map() e .join(''))
function templateProjetos() {
  const cardsHtml = listaProjetos.map(item => `
    <article class="card">
      <h3 class="card__titulo">${item.titulo}</h3>
      <p class="card__texto">${item.texto}</p>
    </article>
  `).join('');

  return `
    <section class="secao">
      <h2>Projetos e Iniciativas Solidárias</h2>
      <p>Conheça os projetos de apoio desenvolvidos diretamente para a nossa comunidade:</p>

      <div class="grid-cards">
        ${cardsHtml}
      </div>
    </section>
  `;
}

// 4. Template: Tela de Cadastro de Voluntários
function templateCadastro() {
  return `
    <section class="secao">
      <h2>Cadastro de Voluntários</h2>
      <p>Faça parte dessa equipe de voluntários preenchendo os campos abaixo. Em breve entraremos em contato:</p>

      <div id="mensagemFeedback" style="margin-bottom: var(--espaco-md);"></div>

      <form class="formulario" id="formCadastro">
        <fieldset class="formulario__grupo">
          <legend class="formulario__legenda">Dados do Voluntário</legend>

          <p class="formulario__campo">
            <label class="formulario__rotulo" for="nome">Nome Completo:</label>
            <input class="formulario__input" type="text" id="nome" name="nome" required placeholder="Ex: Sérgio Rocha">
          </p>

          <p class="formulario__campo">
            <label class="formulario__rotulo" for="email">E-mail:</label>
            <input class="formulario__input" type="email" id="email" name="email" required placeholder="Ex: cadastro@amigossemfronteiras.org">
          </p>

          <p class="formulario__campo">
            <label class="formulario__rotulo" for="telefone">Telefone:</label>
            <input class="formulario__input" type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000" pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" title="Formato: (00) 00000-0000">
          </p>

          <p class="formulario__campo">
            <label class="formulario__rotulo" for="endereco">Endereço:</label>
            <input class="formulario__input" type="text" id="endereco" name="endereco" required placeholder="Rua das Flores, 123">
          </p>
        </fieldset>

        <p class="formulario__campo" style="margin-top: var(--espaco-md);">
          <button class="botao" type="submit">Enviar Cadastro</button>
        </p>
      </form>
    </section>
  `;
}