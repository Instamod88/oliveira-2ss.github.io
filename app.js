function gerarSensi() {
  const dpi = document.getElementById("dpi").value;
  const puxada = document.getElementById("puxada").value;
  const problema = document.getElementById("problema").value;

  const sensi = calcularSensi(dpi, puxada, problema);

  document.getElementById("resultado").innerHTML = `
    <h2>Sensibilidade Ideal</h2>
    Geral: ${sensi.geral}<br>
    Red Dot: ${sensi.redDot}<br>
    2x: ${sensi.mira2x}<br>
    4x: ${sensi.mira4x}<br>
    AWM: ${sensi.awm}
  `;
} 