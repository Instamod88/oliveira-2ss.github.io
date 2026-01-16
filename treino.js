const treinos = {
  iniciante: {
    nome: "Controle Básico",
    duracao: "10 minutos",
    objetivo: "Parar de passar da cabeça",
    passos: [
      "Entre no modo treino do Free Fire",
      "Use apenas SMG ou AR sem coronha",
      "Mire no peito do boneco",
      "Dê tiros curtos (tap fire)",
      "Puxe o dedo 1mm para cima apenas"
    ],
    erroComum: "Puxar demais",
    correcao: "Reduza a força do dedo e aumente o tempo do disparo",
    hud: "Red Dot",
    arma: "MP40 ou M4A1",
    dpi: "400-500"
  },

  intermediario: {
    nome: "Micro-Puxada",
    duracao: "15 minutos",
    objetivo: "Grudar mais capa",
    passos: [
      "Use AR (Scar, XM8, Groza)",
      "Mire sempre no pescoço",
      "Disparo de 2 a 3 balas",
      "Puxada curta e rápida",
      "Solte o dedo após o capa"
    ],
    erroComum: "Segurar o dedo atirando",
    correcao: "Treine rajadas curtas",
    hud: "Red Dot ou 2x",
    arma: "AR",
    dpi: "400-600"
  },

  avancado: {
    nome: "Precisão de Capa",
    duracao: "20 minutos",
    objetivo: "Consistência",
    passos: [
      "Treine contra bonecos em movimento",
      "Mira sempre abaixo da cabeça",
      "Use Red Dot",
      "Atire apenas quando a mira estabilizar",
      "Controle a respiração"
    ],
    erroComum: "Atirar em movimento",
    correcao: "Pare 0.5s antes de atirar",
    hud: "Red Dot ou 4x",
    arma: "AWM ou Groza",
    dpi: "400-800"
  }
};

function iniciarTreino(nivel) {
  const treino = treinos[nivel];

  let html = `
    <div class="treino-box">
      <h2>🎯 Treino: ${treino.nome}</h2>
      <p><strong>Duração:</strong> ${treino.duracao}</p>
      <p><strong>Objetivo:</strong> ${treino.objetivo}</p>
      <h3>Passos:</h3>
      <ol>
  `;

  treino.passos.forEach(p => {
    html += `<li>${p}</li>`;
  });

  html += `
      </ol>
      <p><strong>Erro comum:</strong> ${treino.erroComum}</p>
      <p><strong>Correção:</strong> ${treino.correcao}</p>
      <p><strong>HUD recomendado:</strong> ${treino.hud}</p>
      <p><strong>Arma sugerida:</strong> ${treino.arma}</p>
      <p><strong>DPI recomendado:</strong> ${treino.dpi}</p>
    </div>
  `;

  document.getElementById("resultado").innerHTML = html;
}