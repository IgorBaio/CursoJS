const randomNumber = (valorLimite) => {

  return Math.floor(Math.random(valorLimite) * valorLimite) + 1;
}

console.log(randomNumber(100));
