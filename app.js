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
const devices = {
  Samsung: [
    "Galaxy S8","Galaxy S9","Galaxy S10","Galaxy S20","Galaxy S21","Galaxy S22","Galaxy S23",
    "Galaxy A10","Galaxy A20","Galaxy A30","Galaxy A50","Galaxy A51","Galaxy A52","Galaxy A53",
    "Galaxy A54","Galaxy M10","Galaxy M20","Galaxy M30","Galaxy M51"
  ],
  Xiaomi: [
    "Redmi 8","Redmi 9","Redmi 10","Redmi Note 8","Redmi Note 9","Redmi Note 10","Redmi Note 11",
    "Poco X3","Poco X4","Poco X5","Poco F3","Poco F4"
  ],
  Apple: [
    "iPhone 7","iPhone 8","iPhone X","iPhone XR","iPhone 11","iPhone 12","iPhone 13","iPhone 14","iPhone 15"
  ],
  Motorola: [
    "Moto G7","Moto G8","Moto G9","Moto G10","Moto G20","Moto G30","Moto G40","Moto G50","Moto Edge 30"
  ],
  Realme: [
    "Realme C11","Realme C25","Realme 7","Realme 8","Realme 9","Realme GT"
  ],
  Oppo: [
    "Oppo A15","Oppo A16","Oppo A54","Oppo Reno 5","Oppo Reno 7"
  ],
  Infinix: [
    "Infinix Hot 10","Hot 11","Hot 12","Note 10","Note 11","Zero 5G"
  ]
};

window.addEventListener("DOMContentLoaded", () => {
  const marca = document.getElementById("marca");
  const modelo = document.getElementById("modelo");

  Object.keys(devices).forEach(m => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    marca.appendChild(opt);
  });

  marca.addEventListener("change", () => {
    modelo.innerHTML = "";
    devices[marca.value].forEach(md => {
      const opt = document.createElement("option");
      opt.value = md;
      opt.textContent = md;
      modelo.appendChild(opt);
    });
  });
})