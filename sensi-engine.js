function calcularSensi(dpi, puxada, problema) {
  let base = 1000 / dpi;

  let fatorPuxada = {
    leve: 0.85,
    media: 1.0,
    agressiva: 1.15
  }[puxada];

  let ajusteProblema = {
    passa: -0.08,
    naosobe: 0.12,
    instavel: 0
  }[problema];

  let geral = (base * fatorPuxada + ajusteProblema) * 100;
  let redDot = geral * 0.9;
  let mira2x = geral * 0.85;
  let mira4x = geral * 0.75;
  let awm = geral * 0.65;

  return {
    geral: Math.round(geral),
    redDot: Math.round(redDot),
    mira2x: Math.round(mira2x),
    mira4x: Math.round(mira4x),
    awm: Math.round(awm)
  };
}