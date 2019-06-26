<?php

function pergunta($erro)
{

  if ($erro) {
    echo 'Todos os valores devem ser numéricos';
  }
  echo '<form method="post" action="#">';
  echo '<input name="a" size="3"> x² ';
  echo '<input name="b" size="3"> x ';
  echo '<input name="c" size="3"><br><br>';
  echo '<button type="submit">Calcular Raízes</button>';
  echo '</form>';
}

function raizes($a, $b, $c)
{
  $delta = ($b * $b) - (4 * $a * $c);

  if ($delta > 0) {
    $x1 = (-$b + sqrt($delta)) / (2 * $a);
    $x2 = (-$b - sqrt($delta)) / (2 * $a);
  } else if ($delta == 0) {
    $x1 = (-$b) / (2 * $a);
    $x2 = (-$b) / (2 * $a);
  } else {
    echo '<strong>O valor de delta não existe em R</strong><br>';
  }

  if ($delta >= 0) {
    echo '<strong>O valor de delta é:</strong> ' . "$delta" . '<br>';
    echo '<strong>O valor de x1 é:</strong> ' . "$x1" . '<br>';
    echo '<strong>O valor de x2 é:</strong> ' . "$x2" . '<br>';
  }
}

if (isset($_POST['a']) && isset($_POST['b']) && isset($_POST['c'])) {
  if (is_numeric($_POST['a']) && is_numeric($_POST['b']) && is_numeric($_POST['c'])) {
    $a = $_POST['a'];
    $b = $_POST['b'];
    $c = $_POST['c'];

    raizes($a, $b, $c);
  } else {
    pergunta(true);
  }
} else {

  pergunta(false);
}
