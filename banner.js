const mudarCor = () => {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  const ElementCabecalho = document.querySelector(".cabecalho");
  ElementCabecalho.style.backgroundColor = `rgb(${r},${g}, ${b})`;

  setTimeout(mudarCor, 1000)
};

mudarCor()