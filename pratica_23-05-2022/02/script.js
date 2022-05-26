var imprimir = () => {

  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const idade = document.getElementById("idade").value;
  const genero = document.getElementById("genero").value;
  const sobre = document.getElementById("sobre").value.trim();
  let cont=0

  var result = `${nome} ${sobrenome} é do sexo ${genero} e tem ${idade} anos.`;
  document.getElementById("paragrafo").innerHTML = result;

  for (let i = 0; i<sobre.length; i++) {
    if(sobre[i]==='a'||sobre[i]==='e'||sobre[i]==='i'||sobre[i]==='o'||sobre[i]==='u'){
      cont++;
    }
  }
  document.getElementById("paragrafoSobre").innerHTML=`Numero de caracteres = ${sobre.length}, numero de vogais = ${cont}`
}