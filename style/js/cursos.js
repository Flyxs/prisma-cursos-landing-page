
const cursos = {
  tecnologia: {
    titulo: "CURSOS DE TECNOLOGIA:",
    cursos: [
      {
        nome: "Curso 1 - Desenvolvimento na Web",
        descricao: "Do zero ao seu primeiro site. Aprenda HTML, CSS e JavaScript com projetos reais e orientação de quem atua no mercado. Ideal para quem quer entrar na área de tecnologia sem experiência prévia.",
        carga: "120h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 2 - Marketing Digital",
        descricao: "Domine as estratégias que movem negócios online. Aprenda sobre redes sociais, CEO, tráfego pago e criação de conteúdo com foco em resultados concretos.",
        carga: "80h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 3 - Análise de Dados",
        descricao: "Transforme dados em decisões. Aprenda Excel avançado, introdução ao Python e visualização de dados — habilidades entre as mais valorizadas pelo mercado atualmente.",
        carga: "100h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 4 - Desenvolvimento Mobile (React Native)",
        descricao: "Crie aplicativos para Android e iOS com uma única base de código. Curso prático com foco em projetos reais e publicação nas lojas.",
        carga: "140h",
        modalidade: "híbrida"
      }
    ],
    cta: "VOCÊ ESTÁ A UM PASSO DE GARANTIR O SEU FUTURO PROFISSIONAL NA ÁREA DA TECNOLOGIA!"
  },
  gestao: {
    titulo: "CURSOS DE GESTÃO:",
    cursos: [
      {
        nome: "Curso 1 - Financeiro para Não Financeiros",
        descricao: "Entenda o dinheiro da empresa sem ser contador. Aprenda fluxo de caixa, DRE, precificação e controle financeiro, essencial para quem atua ou quer atuar em gestão.",
        carga: "60h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 2 - Gestão de Projetos",
        descricao: "Lidere, organize e entregue resultados com sua equipe. Aprenda metodologias ágeis, gestão de equipes e ferramentas de planejamento para se destacar em qualquer área profissional.",
        carga: "60h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 3 - Recursos Humanos e Gestão de Pessoas",
        descricao: "Aprenda a recrutar, engajar e desenvolver equipes. Conteúdo prático sobre clima organizacional, avaliação de desempenho e legislação trabalhista básica.",
        carga: "70h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 4 - Empreendedorismo e Startups",
        descricao: "Para quem quer criar ou crescer um negócio. Aprenda validação de ideias, modelo de negócio, pitch e captação de clientes, com mentoria de empreendedores reais.",
        carga: "90h",
        modalidade: "híbrida"
      }
    ],
    cta: "VOCÊ ESTÁ A UM PASSO DE GARANTIR O SEU FUTURO PROFISSIONAL NA ÁREA DE GESTÃO!"
  },
  design: {
    titulo: "CURSOS DE DESIGN:",
    cursos: [
      {
        nome: "Curso 1 - Motion Design e Edição de Vídeo",
        descricao: "Dê vida às suas criações. Aprenda a criar animações, vinhetas e vídeos para redes sociais e apresentações usando After Effects e Premiere. Mercado em expansão com o crescimento do conteúdo digital.",
        carga: "90h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 2 - UX/UI Design",
        descricao: "Crie interfaces que as pessoas amam usar. Além disso, aprenda os fundamentos de experiência e interface, ferramentas como o Figma e como pensar em soluções centradas no usuário.",
        carga: "80h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 3 - Design Gráfico Essencial",
        descricao: "Do Canva ao profissional. Aprenda princípios de composição, tipografia, cor e identidade visual com ferramentas como Illustrator e Photoshop. Ideal para quem quer trabalhar com comunicação visual.",
        carga: "100h",
        modalidade: "híbrida"
      },
      {
        nome: "Curso 4 - Fotografia e Edição Digital",
        descricao: "Aprenda a fotografar com qualidade e editar imagens para marcas, e-commerces e redes sociais. Curso prático com sessões de fotografia ao vivo e edição no Lightroom e Photoshop.",
        carga: "110h",
        modalidade: "híbrida"
      }
    ],
    cta: "VOCÊ ESTÁ A UM PASSO DE GARANTIR O SEU FUTURO PROFISSIONAL NA ÁREA DO DESIGN!"
  }
};

function abrirModal(area) {
  const data = cursos[area];
  const metade1 = data.cursos.slice(0, 2);
  const metade2 = data.cursos.slice(2, 4);

  const gerarCurso = (curso) => `
    <div class="modal-curso">
      <h3>${curso.nome}</h3>
      <p>${curso.descricao}</p>
      <p class="modal-carga">Carga horária: ${curso.carga} / Modalidade: ${curso.modalidade}</p>
    </div>
  `;

  document.getElementById('modal-titulo').textContent = data.titulo;
  document.getElementById('modal-coluna1').innerHTML = metade1.map(gerarCurso).join('');
  document.getElementById('modal-coluna2').innerHTML = metade2.map(gerarCurso).join('');
  document.getElementById('modal-cta').textContent = data.cta;

  document.getElementById('modal-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  document.getElementById('modal-overlay').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function irParaContato() {
  fecharModal();
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) fecharModal();
});