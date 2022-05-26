const a = Math.floor(Math.random()*100);
const b = Math.floor(Math.random()*100);
var randNum=()=>{
  document.getElementById("paragrafo").innerHTML=`${a} + ${b} = ___`;
}
var verificaResultado=()=>{
  const resultado = document.getElementById("resultado").value;
  document.getElementById("paragrafo").innerHTML=`${a} + ${b} = ${resultado}`;
  resultado==(a+b)
    ?
    document.getElementById("paragrafo").style.color="green"
    :
    document.getElementById("paragrafo").style.color="red"

}