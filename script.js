/* ===================================================================
   ESCUDO DIGITAL — script.js
   =================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------
     1. DADOS DAS MEDIDAS POR PLATAFORMA
     --------------------------------------------------------------- */
  const DATA = {
    instagram: [
      { t: "Controle de conteúdo sensível", d: "O Instagram tem um controle de conteúdo sensível que ajusta o quanto de conteúdo potencialmente perturbador ou sexual aparece na aba Explorar.", how: "Vá em Configurações → Conta → Controle de conteúdo sensível e escolha a opção mais restritiva disponível.", obs: "O nome e o caminho exato dessa opção podem variar conforme a versão do aplicativo." },
      { t: "Palavras ocultas", d: "É possível ocultar comentários e mensagens que contenham palavras, frases ou emojis específicos.", how: "Em Configurações → Privacidade → Palavras ocultas, ative os filtros padrão e adicione termos personalizados." },
      { t: "\u201cNão tenho interesse\u201d", d: "Essa reação ensina o algoritmo a mostrar menos conteúdo parecido com aquele post.", how: "Toque nos três pontos sobre a publicação e selecione \u201cNão tenho interesse\u201d sempre que algo inadequado aparecer." },
      { t: "Deixar de seguir contas problemáticas", d: "Contas que publicam repetidamente conteúdo impróprio devem ser removidas da sua lista de seguidos.", how: "Acesse o perfil da conta e toque em \u201cSeguindo\u201d para deixar de seguir." },
      { t: "Bloquear contas", d: "Bloquear impede que a conta veja seu perfil, entre em contato ou apareça para você.", how: "No perfil da conta, toque nos três pontos e escolha \u201cBloquear\u201d." },
      { t: "Denunciar conteúdo inadequado", d: "Denunciar uma publicação ajuda a plataforma a identificar e remover conteúdo que viole as diretrizes.", how: "Toque nos três pontos sobre o post e selecione \u201cDenunciar\u201d, escolhendo o motivo mais adequado." },
      { t: "Denunciar contas", d: "Além de publicações isoladas, é possível denunciar o perfil inteiro quando o padrão de conteúdo é recorrente.", how: "No perfil, toque nos três pontos → \u201cDenunciar conta\u201d." },
      { t: "Evitar interagir com conteúdos inadequados", d: "Curtir, comentar ou até parar para assistir sinaliza ao algoritmo que aquele tipo de conteúdo interessa a você.", how: "Role para o próximo post sem interagir, em vez de abrir ou pausar o conteúdo." },
      { t: "Revisar recomendações", d: "A aba Explorar e os Reels sugeridos refletem seu histórico de interações recentes.", how: "Revise periodicamente o que está sendo sugerido e use \u201cNão tenho interesse\u201d para recalibrar o algoritmo." },
      { t: "Controles de supervisão/família", d: "Para contas de adolescentes ou perfis supervisionados, o Instagram oferece ferramentas de supervisão parental.", how: "Em Configurações → Família, explore as ferramentas de supervisão quando disponíveis para o tipo de conta.", obs: "A disponibilidade depende da idade da conta e da região." }
    ],
    facebook: [
      { t: "Preferências do Feed", d: "O Facebook permite ajustar quais tipos de conteúdo têm prioridade ou são reduzidos no seu Feed.", how: "Acesse Configurações → Preferências do Feed e revise as opções de conteúdo mostrado com menos frequência." },
      { t: "\u201cNão tenho interesse\u201d", d: "Assim como no Instagram, essa reação reduz a exposição a conteúdo semelhante no futuro.", how: "Toque nos três pontos da publicação e selecione \u201cNão tenho interesse\u201d." },
      { t: "Deixar de seguir", d: "Você pode continuar amigo de alguém sem ver suas publicações no Feed.", how: "No perfil da pessoa ou página, toque em \u201cSeguindo\u201d para deixar de seguir sem desfazer a amizade." },
      { t: "Bloquear", d: "Bloquear uma conta impede qualquer interação e visibilidade mútua na plataforma.", how: "Em Configurações → Bloqueio, adicione o nome ou acesse o perfil e escolha \u201cBloquear\u201d." },
      { t: "Denunciar", d: "Publicações, fotos, vídeos e perfis podem ser denunciados diretamente para revisão do Facebook.", how: "Toque nos três pontos sobre o conteúdo e selecione \u201cDenunciar\u201d." },
      { t: "Conteúdo sensível", d: "Alguns tipos de conta têm configurações específicas para reduzir a exibição de conteúdo sensível.", how: "Verifique em Configurações → Preferências de conteúdo se essa opção está disponível para sua conta.", obs: "Nem todas as contas têm esse controle visível." },
      { t: "Evitar interações", d: "Comentar, curtir ou compartilhar conteúdo impróprio aumenta a chance de ele reaparecer.", how: "Prefira ignorar e seguir em frente em vez de interagir com a publicação." },
      { t: "Ajustar recomendações", d: "Grupos e páginas sugeridos também seguem seu histórico de navegação e interações.", how: "Revise a seção \u201cSugestões para você\u201d e remova sugestões indesejadas quando possível." },
      { t: "Revisar atividades", d: "O histórico de atividades mostra curtidas, comentários e buscas recentes, ajudando a entender por que certos conteúdos aparecem.", how: "Acesse Configurações → Seu tempo no Facebook → Registro de atividades para revisar e apagar itens." },
      { t: "Supervisão/controles familiares", d: "Para contas de menores de idade, existem ferramentas de supervisão vinculadas a um responsável.", how: "Consulte a Central de Supervisão do Facebook para configurar essas ferramentas, quando aplicável.", obs: "A disponibilidade varia por idade, país e tipo de conta." }
    ],
    x: [
      { t: "Controlar mídia potencialmente sensível", d: "O X permite ajustar se conteúdo marcado como sensível é exibido automaticamente.", how: "Em Configurações e privacidade → Privacidade e segurança → Conteúdo que você vê, desative a exibição de mídia sensível." },
      { t: "Denunciar conteúdo", d: "Publicações que violam as regras da plataforma podem ser denunciadas para análise.", how: "Toque nos três pontos do post e selecione \u201cDenunciar Post\u201d." },
      { t: "Bloquear contas", d: "Bloquear impede que a conta veja seu perfil ou interaja com você.", how: "No perfil da conta, toque nos três pontos e escolha \u201cBloquear\u201d." },
      { t: "Deixar de seguir", d: "Remover contas que publicam conteúdo impróprio reduz o que aparece na sua linha do tempo.", how: "No perfil da conta, toque em \u201cSeguindo\u201d para deixar de seguir." },
      { t: "Silenciar contas", d: "Silenciar oculta as publicações de uma conta sem que ela saiba, diferente do bloqueio.", how: "Toque nos três pontos do perfil ou post e selecione \u201cSilenciar\u201d." },
      { t: "Filtros de palavras", d: "É possível ocultar tweets e notificações que contenham palavras, frases ou hashtags específicas.", how: "Em Configurações → Privacidade e segurança → Silenciado → Palavras silenciadas, adicione os termos desejados." },
      { t: "Evitar interações", d: "Curtir, responder ou repostar conteúdo impróprio aumenta sua exposição a conteúdo semelhante.", how: "Role para o próximo post sem interagir." },
      { t: "Revisar contas seguidas", d: "Uma revisão periódica ajuda a identificar contas que passaram a publicar conteúdo impróprio.", how: "Acesse sua lista de \u201cSeguindo\u201d de tempos em tempos e remova contas problemáticas." },
      { t: "Configurações de privacidade e segurança", d: "O painel de privacidade reúne várias opções relacionadas a quem pode interagir com você e o que você vê.", how: "Explore Configurações → Privacidade e segurança para revisar todas as opções disponíveis." },
      { t: "Outras ferramentas oficiais", d: "O X disponibiliza recursos adicionais de segurança que são atualizados com frequência.", how: "Consulte periodicamente o Centro de Ajuda oficial do X para conhecer novos recursos.", obs: "As políticas do X sobre conteúdo adulto podem ser diferentes das de outras plataformas, então a exposição pode variar mesmo com os filtros ativados." }
    ],
    youtube: [
      { t: "Ativar Modo restrito", d: "O Modo restrito ajuda a ocultar vídeos com conteúdo potencialmente impróprio.", how: "No menu da conta, acesse Modo restrito e ative a opção na parte inferior do menu." },
      { t: "\u201cNão tenho interesse\u201d", d: "Essa opção sinaliza ao algoritmo que você não quer ver aquele vídeo ou vídeos parecidos.", how: "Toque nos três pontos ao lado do vídeo sugerido e selecione \u201cNão tenho interesse\u201d." },
      { t: "\u201cNão recomendar o canal\u201d", d: "Além do vídeo, é possível parar de receber sugestões de um canal inteiro.", how: "Toque nos três pontos do vídeo e selecione \u201cNão recomendar este canal\u201d." },
      { t: "Evitar interações", d: "Curtir, comentar ou assistir até o fim reforça para o algoritmo que aquele conteúdo é relevante para você.", how: "Feche ou pule vídeos impróprios sem interagir com eles." },
      { t: "Revisar histórico de exibição", d: "As recomendações são fortemente baseadas no que você já assistiu.", how: "Acesse Histórico → Histórico de exibição para remover vídeos específicos ou limpar tudo." },
      { t: "Revisar histórico de pesquisa", d: "Buscas anteriores também influenciam os vídeos sugeridos.", how: "Em Histórico → Histórico de pesquisa, remova termos que não representam seu interesse atual." },
      { t: "Controlar recomendações", d: "A combinação de histórico, inscrições e interações forma a página inicial e os vídeos sugeridos.", how: "Use \u201cNão tenho interesse\u201d, \u201cNão recomendar o canal\u201d e a limpeza de histórico em conjunto para recalibrar as sugestões." },
      { t: "Reduzir exposição a Shorts inadequados", d: "Os Shorts têm um sistema de recomendação próprio, que também responde às suas interações.", how: "Deslize para o próximo Short sem assistir por completo e use \u201cNão tenho interesse\u201d quando disponível." },
      { t: "Denunciar conteúdo", d: "Vídeos que violam as diretrizes da comunidade podem ser denunciados para análise da equipe do YouTube.", how: "Toque nos três pontos do vídeo e selecione \u201cDenunciar\u201d, indicando o motivo." },
      { t: "Controles familiares/supervisão", d: "O YouTube oferece o app YouTube Kids e a Central de Supervisão para contas gerenciadas por um responsável.", how: "Configure a Central de Supervisão do Google ou o YouTube Kids para contas de crianças e adolescentes.", obs: "Os recursos disponíveis variam conforme a idade cadastrada na conta." }
    ]
  };

  const PLATFORM_ICON = {
    instagram: "IG", facebook: "FB", x: "X", youtube: "YT"
  };

  /* ---------------------------------------------------------------
     2. RENDERIZAR CARDS DE CADA PLATAFORMA
     --------------------------------------------------------------- */
  function renderPlatformCards() {
    Object.keys(DATA).forEach(function (platform) {
      const grid = document.getElementById("grid-" + platform);
      if (!grid) return;
      const items = DATA[platform];
      const html = items.map(function (item, index) {
        const num = String(index + 1).padStart(2, "0");
        const obsHtml = item.obs
          ? '<p class="measure-obs">Observação: ' + item.obs + "</p>"
          : "";
        return (
          '<article class="measure-card">' +
            '<span class="measure-num">' + num + "</span>" +
            "<div>" +
              "<h3>" + item.t + "</h3>" +
              "<p>" + item.d + "</p>" +
              '<p class="measure-how"><strong>Como fazer:</strong> ' + item.how + "</p>" +
              obsHtml +
            "</div>" +
          "</article>"
        );
      }).join("");
      grid.innerHTML = html;
    });
  }

  /* ---------------------------------------------------------------
     3. ANIMAÇÃO DE ENTRADA DOS CARDS (IntersectionObserver)
     --------------------------------------------------------------- */
  function setupCardReveal() {
    const cards = document.querySelectorAll(".measure-card");
    if (!("IntersectionObserver" in window) || cards.length === 0) {
      cards.forEach(function (c) { c.classList.add("in-view"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(function (c) { observer.observe(c); });
  }

  /* ---------------------------------------------------------------
     4. TEMA CLARO / ESCURO
     --------------------------------------------------------------- */
  function setupTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById("themeToggle");
    const STORAGE_KEY = "escudo-digital-theme";

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* localStorage indisponível */ }

    if (saved === "light" || saved === "dark") {
      root.setAttribute("data-theme", saved);
    }

    function currentTheme() {
      return root.getAttribute("data-theme") === "light" ? "light" : "dark";
    }

    toggle.setAttribute("aria-pressed", String(currentTheme() === "light"));

    toggle.addEventListener("click", function () {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      toggle.setAttribute("aria-pressed", String(next === "light"));
      try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* segue sem salvar */ }
    });
  }

  /* ---------------------------------------------------------------
     5. MENU MOBILE
     --------------------------------------------------------------- */
  function setupMobileMenu() {
    const btn = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    btn.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  /* ---------------------------------------------------------------
     6. CHECKLIST + BARRA DE PROGRESSO (localStorage)
     --------------------------------------------------------------- */
  function setupChecklist() {
    const STORAGE_KEY = "escudo-digital-checklist";
    const boxes = Array.prototype.slice.call(document.querySelectorAll('#checklist-items input[type="checkbox"]'));
    const fill = document.getElementById("progressFill");
    const label = document.getElementById("progressLabel");
    const resetBtn = document.getElementById("resetChecklist");

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
      } catch (e) {
        return {};
      }
    }

    function saveState(state) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* segue sem salvar */ }
    }

    function updateProgress() {
      const checked = boxes.filter(function (b) { return b.checked; }).length;
      const pct = boxes.length ? Math.round((checked / boxes.length) * 100) : 0;
      fill.style.width = pct + "%";
      label.textContent = "Proteção configurada: " + pct + "%";
    }

    const state = loadState();
    boxes.forEach(function (box) {
      const key = box.getAttribute("data-key");
      if (state[key]) box.checked = true;
      box.addEventListener("change", function () {
        const s = loadState();
        s[key] = box.checked;
        saveState(s);
        updateProgress();
      });
    });

    resetBtn.addEventListener("click", function () {
      boxes.forEach(function (box) { box.checked = false; });
      saveState({});
      updateProgress();
    });

    updateProgress();
  }

  /* ---------------------------------------------------------------
     7. FAQ / ACCORDION
     --------------------------------------------------------------- */
  const FAQ = [
    { q: "Posso bloquear 100% do conteúdo inadequado?", a: "Não. Nenhuma plataforma, filtro ou combinação de configurações garante bloqueio absoluto. As ferramentas apresentadas aqui reduzem drasticamente a exposição, mas não eliminam o risco por completo." },
    { q: "Por que ainda aparece conteúdo inadequado depois de ativar os filtros?", a: "Os filtros dependem da classificação automática de cada conteúdo, que pode falhar. Além disso, novas publicações surgem constantemente e nem sempre são identificadas a tempo pelos sistemas da plataforma." },
    { q: "O algoritmo aprende com o que eu assisto?", a: "Sim. Curtidas, tempo de visualização, buscas e até pausas em um conteúdo são sinais usados pelo algoritmo para decidir o que recomendar em seguida." },
    { q: "O que devo fazer quando aparece algo inadequado?", a: "Evite interagir com o conteúdo, use a opção \u201cNão tenho interesse\u201d quando disponível e denuncie a publicação ou a conta, conforme explicado em cada seção deste site." },
    { q: "Quando devo denunciar?", a: "Sempre que um conteúdo ou conta violar as diretrizes da plataforma, como nudez não consentida, exploração ou conteúdo sexual explícito. A denúncia ajuda a proteger também outras pessoas." },
    { q: "Qual a diferença entre bloquear, silenciar e deixar de seguir?", a: "Bloquear impede qualquer interação e visibilidade mútua. Silenciar oculta o conteúdo da conta sem que ela saiba. Deixar de seguir apenas remove as publicações do seu feed, sem restringir outras interações." },
    { q: "Os filtros funcionam em todos os dispositivos?", a: "As configurações costumam ser vinculadas à sua conta, então tendem a valer em diferentes dispositivos. Ainda assim, é recomendável conferir as configurações separadamente no celular, tablet e computador." }
  ];

  function renderFaq() {
    const container = document.getElementById("accordion");
    if (!container) return;

    container.innerHTML = FAQ.map(function (item, i) {
      const id = "faq-" + i;
      return (
        '<div class="accordion-item">' +
          '<h3>' +
            '<button class="accordion-trigger" id="' + id + '-trigger" aria-expanded="false" aria-controls="' + id + '-panel">' +
              "<span>" + item.q + "</span>" +
              '<span class="plus" aria-hidden="true">+</span>' +
            "</button>" +
          "</h3>" +
          '<div class="accordion-panel" id="' + id + '-panel" role="region" aria-labelledby="' + id + '-trigger">' +
            "<p>" + item.a + "</p>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    container.querySelectorAll(".accordion-item").forEach(function (item) {
      const trigger = item.querySelector(".accordion-trigger");
      const panel = item.querySelector(".accordion-panel");

      trigger.addEventListener("click", function () {
        const isOpen = item.classList.contains("open");

        container.querySelectorAll(".accordion-item.open").forEach(function (openItem) {
          if (openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
            openItem.querySelector(".accordion-panel").style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove("open");
          trigger.setAttribute("aria-expanded", "false");
          panel.style.maxHeight = null;
        } else {
          item.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------------------------------------------------------------
     8. BOTÃO VOLTAR AO TOPO
     --------------------------------------------------------------- */
  function setupBackToTop() {
    const btn = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 480) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    }, { passive: true });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------
     INICIALIZAÇÃO
     --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderPlatformCards();
    setupCardReveal();
    setupTheme();
    setupMobileMenu();
    setupChecklist();
    renderFaq();
    setupBackToTop();
  });
})();
