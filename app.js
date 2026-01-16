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
  "Apple":["iPhone 2G","iPhone 3G","iPhone 3GS","iPhone 4","iPhone 4S","iPhone 5","iPhone 5C","iPhone 5S","iPhone 6","iPhone 6 Plus","iPhone 6S","iPhone 6S Plus","iPhone SE 1ª geração","iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus","iPhone X","iPhone XR","iPhone XS","iPhone XS Max","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max","iPhone 12","iPhone 12 Mini","iPhone 12 Pro","iPhone 12 Pro Max","iPhone 13","iPhone 13 Mini","iPhone 13 Pro","iPhone 13 Pro Max","iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max","iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max","iPhone SE 2ª geração","iPhone SE 3ª geração"],
  "Samsung":["Galaxy S","Galaxy S2","Galaxy S3","Galaxy S4","Galaxy S5","Galaxy S6","Galaxy S6 Edge","Galaxy S6 Edge+","Galaxy S7","Galaxy S7 Edge","Galaxy S8","Galaxy S8+","Galaxy S9","Galaxy S9+","Galaxy S10","Galaxy S10+","Galaxy S10e","Galaxy S20","Galaxy S20+","Galaxy S20 Ultra","Galaxy S21","Galaxy S21+","Galaxy S21 Ultra","Galaxy S22","Galaxy S22+","Galaxy S22 Ultra","Galaxy S23","Galaxy S23+","Galaxy S23 Ultra","Galaxy A3 2015","Galaxy A3 2016","Galaxy A3 2017","Galaxy A5 2015","Galaxy A5 2016","Galaxy A5 2017","Galaxy A7 2015","Galaxy A7 2016","Galaxy A7 2017","Galaxy A8","Galaxy A8+","Galaxy A10","Galaxy A10s","Galaxy A12","Galaxy A13","Galaxy A14","Galaxy A20","Galaxy A20s","Galaxy A20e","Galaxy A30","Galaxy A30s","Galaxy A31","Galaxy A40","Galaxy A41","Galaxy A50","Galaxy A50s","Galaxy A51","Galaxy A60","Galaxy A70","Galaxy A70s","Galaxy A71","Galaxy A72","Galaxy A73","Galaxy A80","Galaxy A90","Galaxy M10","Galaxy M10s","Galaxy M20","Galaxy M21","Galaxy M21s","Galaxy M30","Galaxy M30s","Galaxy M31","Galaxy M31s","Galaxy M32","Galaxy M33","Galaxy M34","Galaxy M40","Galaxy M42","Galaxy M53","Galaxy Z Fold","Galaxy Z Fold 2","Galaxy Z Fold 3","Galaxy Z Fold 4","Galaxy Z Fold 5","Galaxy Z Flip","Galaxy Z Flip 3","Galaxy Z Flip 4","Galaxy Z Flip 5","Galaxy Z Fold Lite","Galaxy Z Flip Lite"],
  "Xiaomi":["Mi 1","Mi 2","Mi 3","Mi 4","Mi 4c","Mi 4i","Mi 5","Mi 5s","Mi 5s Plus","Mi 6","Mi 6X","Mi 8","Mi 8 SE","Mi 8 Lite","Mi 9","Mi 9 SE","Mi 9T","Mi 9T Pro","Mi 10","Mi 10 Pro","Mi 10T","Mi 10T Pro","Mi 11","Mi 11 Lite","Mi 11 Ultra","Mi 11i","Mi 12","Mi 12 Pro","Mi 12X","Mi 13","Mi 13 Pro"],
  "Redmi":["Redmi 1","Redmi 1S","Redmi 2","Redmi 2A","Redmi 3","Redmi 3S","Redmi 3X","Redmi 4","Redmi 4X","Redmi 4A","Redmi 5","Redmi 5 Plus","Redmi 5A","Redmi 6","Redmi 6A","Redmi 6 Pro","Redmi 7","Redmi 7A","Redmi 7 Pro","Redmi 8","Redmi 8A","Redmi 8 Pro","Redmi 9","Redmi 9A","Redmi 9C","Redmi 9T","Redmi 10","Redmi 10C","Redmi 10X","Redmi Note 1","Redmi Note 2","Redmi Note 3","Redmi Note 4","Redmi Note 4X","Redmi Note 5","Redmi Note 5A","Redmi Note 6","Redmi Note 7","Redmi Note 8","Redmi Note 9","Redmi Note 10","Redmi Note 11","Redmi Note 12","Redmi Note 13"],
  "Poco":["F1","F2","F2 Pro","F3","F4","F4 GT","F5","F5 Pro","X2","X3","X3 NFC","X4 Pro","X5","X5 Pro","M2","M3","M4","M5"],
  "Oppo":["Find X","Find X2","Find X3","Find X5","Find X6","Reno 1","Reno 2","Reno 3","Reno 4","Reno 5","Reno 6","Reno 7","Reno 8","Reno 10","A1","A3","A5","A7","A9","A12","A15","A16","A17","A19","A22","A31","A36","A57","A78","F21","F21 Pro"],
  "Vivo":["V1","V3","V5","V7","V9","V11","V15","V17","V19","V20","V21","V23","V25","V29","X1","X3","X5","X6","X7","X9","X20","X21","X50","X60","X70","X80","X90","Y11","Y12","Y15","Y17","Y20","Y21","Y22","Y25","Y30","Y31","Y33","Y35","Y36","Y55","Y76","Y77"],
  "Realme":["1","2","3","5","6","7","8","9","10","11","C1","C2","C3","C11","C12","C15","C20","C21","C25","C30","C31","C33","C35","C55","Narzo 10","Narzo 10A","20","20A","30","30A","50","50A","50i","60","60A","GT","GT Neo","GT Master","GT Neo2","GT Neo3","GT 2","GT 2 Pro"],
  "Motorola":["Moto G 1ª a 10ª geração","Moto G Play 1 a 11","Moto G Power 2015 a 2024","Moto G Stylus 2018 a 2023","Moto E 1 a 11","Moto X","Moto X2","Moto X Style","Moto X Play","Moto X4","Moto Z","Moto Z Play","Moto Z2","Moto Z2 Force","Moto Z3","Moto Z3 Play","Moto Z4","Moto Edge","Moto Edge+","Moto Edge 20","Moto Edge 20 Pro","Moto Edge 30","Moto Edge 30 Ultra","Moto Edge 40"],
  "OnePlus":["One","2","X","3","3T","5","5T","6","6T","7","7 Pro","7T","7T Pro","8","8 Pro","8T","9","9 Pro","9R","10 Pro","10R","11","11R"],
  "Google Pixel":["Pixel 1ª geração","Pixel XL","Pixel 2","Pixel 2 XL","Pixel 3","Pixel 3 XL","Pixel 3a","Pixel 3a XL","Pixel 4","Pixel 4 XL","Pixel 4a","Pixel 4a 5G","Pixel 5","Pixel 5a","Pixel 6","Pixel 6 Pro","Pixel 6a","Pixel 7","Pixel 7 Pro","Pixel 7a","Pixel 8","Pixel 8 Pro"],
  "Infinix":["Hot 2 a 20","Note 1 a 30","Zero 3","Zero 4","Zero 5","Zero 6","Zero 8","Zero 10","Zero 20","Zero 5G 2024"],
  "Tecno":["Camon 11 a 22","Spark 2 a 11","Phantom 6","Phantom 7","Phantom 8","Phantom X2","Phantom X3"],
  "Huawei":["P6","P7","P8","P9","P10","P20","P30","P40","P50","P60","Mate 7","Mate 8","Mate 9","Mate 10","Mate 20","Mate 30","Mate 40","Mate 50","Nova 2","Nova 3","Nova 4","Nova 5","Nova 6","Nova 7","Nova 8","Nova 9"],
  "Honor":["7","8","9","10","20","30","50","60","70","80","90","X10","X20","X30","Magic 2","Magic 3","Magic 4","Magic 5"],
  "Nokia":["1","1 Plus","2","2.1","2.2","2.3","3","3.1","3.2","3.4","4.2","5","5.1","5.3","5.4","6","6.1","6.2","6.3","7","7.1","7 Plus","7.2","7.3","8","8 Sirocco","8.1","8.3","8.4","9 PureView"],
  "LG":["G2","G3","G4","G5","G6","G7","G8","V10","V20","V30","V35","V40","V50","V60","V70","K4","K7","K8","K10","K11","K12","K20","K30","K40","K50","K51","K52","K60","Q6","Q7","Q8","Q9"],
  "Asus":["Zenfone 2","Zenfone 3","Zenfone 4","Zenfone 5","Zenfone 6","Zenfone 7","Zenfone 8","Zenfone 9","Zenfone 10","ROG Phone","ROG Phone 2","ROG Phone 3","ROG Phone 5","ROG Phone 5s","ROG Phone 6","ROG Phone 6D","ROG Phone 7"]
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