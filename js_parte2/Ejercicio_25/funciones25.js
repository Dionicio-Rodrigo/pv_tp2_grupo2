const randomEntre = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const rgbAleatorio = () => {
  let r = randomEntre(0, 255);
  let g = randomEntre(0, 255);
  let b = randomEntre(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};
