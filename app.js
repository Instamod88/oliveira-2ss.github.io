document.addEventListener("DOMContentLoaded", function () {

  const devices = {
    "Apple": ["iPhone 2G","iPhone 3G","iPhone 3GS","iPhone 4","iPhone 4S","iPhone 5","iPhone 5C","iPhone 5S","iPhone 6","iPhone 6 Plus","iPhone 6S","iPhone 6S Plus","iPhone SE 1ª geração","iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus","iPhone X","iPhone XR","iPhone XS","iPhone XS Max","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max","iPhone 12","iPhone 12 Mini","iPhone 12 Pro","iPhone 12 Pro Max","iPhone 13","iPhone 13 Mini","iPhone 13 Pro","iPhone 13 Pro Max","iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max","iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max","iPhone SE 2ª geração","iPhone SE 3ª geração"],

    "Samsung": ["Galaxy S","Galaxy S2","Galaxy S3","Galaxy S4","Galaxy S5","Galaxy S6","Galaxy S6 Edge","Galaxy S6 Edge+","Galaxy S7","Galaxy S7 Edge","Galaxy S8","Galaxy S8+","Galaxy S9","Galaxy S9+","Galaxy S10","Galaxy S10+","Galaxy S10e","Galaxy S20","Galaxy S20+","Galaxy S20 Ultra","Galaxy S21","Galaxy S21+","Galaxy S21 Ultra","Galaxy S22","Galaxy S22+","Galaxy S22 Ultra","Galaxy S23","Galaxy S23+","Galaxy S23 Ultra","Galaxy A10","Galaxy A20","Galaxy A30","Galaxy A50","Galaxy A51","Galaxy A71","Galaxy M21","Galaxy M31","Galaxy Z Fold","Galaxy Z Fold 2","Galaxy Z Fold 3","Galaxy Z Fold 4","Galaxy Z Fold 5","Galaxy Z Flip","Galaxy Z Flip 3","Galaxy Z Flip 4","Galaxy Z Flip 5"],

    "Xiaomi": ["Mi 8","Mi 9","Mi 9T","Mi 10","Mi 11","Mi 12","Mi 13"],
    "Redmi": ["Redmi 8","Redmi 9","Redmi 10","Redmi Note 8","Redmi Note 9","Redmi Note 10","Redmi Note 11","Redmi Note 12","Redmi Note 13"],
    "Poco": ["Poco F1","Poco F3","Poco F4","Poco F5","Poco X3","Poco X4","Poco X5"],
    "Motorola": ["Moto G20","Moto G30","Moto G40","Moto G50","Moto G60","Moto G71","Moto G82","Moto Edge","Moto Edge 20","Moto Edge 30"],
    "Realme": ["Realme 7","Realme 8","Realme 9","Realme C55","Realme GT","Realme GT Neo"],
    "Asus": ["Zenfone 5","Zenfone 6","Zenfone 7","Zenfone 8","Zenfone 9","ROG Phone 5","ROG Phone 6","ROG Phone 7"]
  };

  const marcaSelect = document.getElementById("marca");
  const modeloSelect = document.getElementById("modelo");

  if (!marcaSelect || !modeloSelect) {
    console.error("Selects não encontrados");
    return;
  }

  marcaSelect.innerHTML = '<option value="">Selecione a marca</option>';
  modeloSelect.innerHTML = '<option value="">Selecione o modelo</option>';

  for (let marca in devices) {
    const option = document.createElement("option");
    option.value = marca;
    option.textContent = marca;
    marcaSelect.appendChild(option);
  }

  marcaSelect.addEventListener("change", function () {
    modeloSelect.innerHTML = '<option value="">Selecione o modelo</option>';

    const modelos = devices[this.value];
    if (!modelos) return;

    modelos.forEach(modelo => {
      const option = document.createElement("option");
      option.value = modelo;
      option.textContent = modelo;
      modeloSelect.appendChild(option);
    });
  });

})