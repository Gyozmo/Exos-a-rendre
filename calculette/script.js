

// entrer un numero
var numberOne = prompt('Premier chiffre');
console.log(numberOne);
var numberConvertOne = parseInt(numberOne)


//entrer un opérateur

  var operator = prompt('Operateur');
  if (operator.includes('*','-','+','/','%')) {
    console.log(operator);
  } else {
    console.log('nop');
  }



// entrer un numero
  var numberTwo = prompt('Deuxieme chiffre')
console.log(numberTwo);
var numberConvertTwo = parseInt(numberTwo)

// concat num OP num1
var tableau = [];

tableau.push(numberConvertOne)
tableau.push(operator)
tableau.push(numberConvertTwo)

console.log(tableau);
//console.log(tableau[0] * tableau[2]);
//ajouter num1 OP num2

switch (operator) {
  case "*" :
    console.log(numberConvertOne * numberConvertTwo);
    break;
    case "-" :
      console.log(numberConvertOne - numberConvertTwo);
      break;
      case "+" :
      console.log(numberConvertOne + numberConvertTwo);
        break;
        case "/" :
          console.log(numberConvertOne / numberConvertTwo);
          break;
          case "%" :
            console.log(numberConvertOne % numberConvertTwo);
            break;
  default:

}

// resultat
