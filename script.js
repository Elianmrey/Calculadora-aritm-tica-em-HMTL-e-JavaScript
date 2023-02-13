function val() {
  let primNum = Number(document.getElementById(`primnumb`).value);
  let segNum = Number(document.getElementById(`segNumb`).value);
  let op = document.getElementById("op").value;



  /*  alert("Este botão funciona");
    alert("Musica por favor");      */

  
 /* if (primNum == Number(primNum) && segNum == Number(segNum)) {
    console.log("O usuario inseriu numeros nos dois campos de texto");
    alert(`Seu primeiro numero foi ${primNum}`);
    alert(`Seu segundo numero foi ${segNum}`);
  }
  else {
    console.log("Um dos campos não foi um numero");
    alert("Erro 0X0001: O valor inserido no primeiro ou segundo campo não é um numero");
  } */


  /* Condição para validar que a variavel é um numero comparando-a com ela mesma usando a função "number()" na segunda parte da condição a fim de saber se o que o usuario inseriu foi um numero ou outra coisa */
  /* Condição para verificar a operação matemática que o usuario 
  inseriu usando "if" e "else if" */
  if (op == '+' && primNum == Number(primNum) && segNum == Number(segNum)) {
    console.log("Operação de Adição");
    document.getElementById('resultado').value = resultado;
    alert(`A Soma dos valores aparece no Terceiro campo ${primNum + segNum}`);
    document.getElementById("resultado").value = Number(primNum + segNum);
  }
  else if (op == '*'&& primNum == Number(primNum) && segNum == Number(segNum)) {
    console.log("Operação de Multiplicação");
    alert(`A Multiplicação dos valores aparece no Terceiro campo ${primNum * segNum}`);
    document.getElementById("resultado").value = Number(primNum * segNum);
  } else if (op == '-' && primNum == Number(primNum) && segNum == Number(segNum)) {
    console.log("Operação de Substração");
    alert(`A Substração dos valores aparece no Terceiro campo ${primNum - segNum}`);
    document.getElementById("resultado").value = Number(primNum - segNum);
  } else if (op == '/' && primNum == Number(primNum) && segNum == Number(segNum)) {
    console.log("Operação de Divisão");
    alert(`A Divisão dos valores aparece no Terceiro campo ${primNum / segNum}`);
    document.getElementById("resultado").value = Number(primNum / segNum);
  } else {
    alert("Esta é uma calculadora aritmetica simples. As operações permitidas são: + - * / e apenas opera com numeros");
  }

}
