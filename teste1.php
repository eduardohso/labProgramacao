<?php
  $nome=$_GET["nome"];
  $mat=$_GET["matricula"];
  $disc=$_GET["disciplina"];
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>SIN 143</title>
	</head>
	<body>
		<h1>Titulo da pagina</h1>
		<p>Paragrafo da pagina</p>
    <h2>INFORMAÇÕES DO ALUNO</h2>
      <ul>
        <li><b>Nome:</b><?php echo $nome; ?></li>
        <li><b>Matricula:</b> <?php echo $mat; ?></li>
        <li><b>Disciplina:</b> <?php echo $disc; ?></li>
      </ul>
	</body>
</html>