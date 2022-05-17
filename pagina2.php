<?php
  $val1=10;
  $val2=20;

  $texto="O valor da variavel \$val1 é $val1.";
  // $texto2="O valor da variavel \$val2 é $val2.";
  $texto3="A soma das duas é: ".($val1+$val2);
  echo "$texto<br>$texto2<br>$texto3";

  for($i=0;$i<10;$i++){
    echo "<br>O valor de i é: $i";
  }

  echo "<br>";
  $a=0;
  while($a<=10){
    echo ($a+100)."<br>";
    $a++;
  }
?>