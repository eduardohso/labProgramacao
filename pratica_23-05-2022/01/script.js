var imprimir = () => {

  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const idade = document.getElementById("idade").value;
  const genero = document.getElementById("genero").value;

  var result = `${nome} ${sobrenome} é do sexo ${genero} e tem ${idade} anos.`;
  document.getElementById("paragrafo").innerHTML = result;

}