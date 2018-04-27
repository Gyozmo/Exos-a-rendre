
/*

for (var i = 1; i <= 3; i++) {
  var userTryLoop = i
}

console.log(userTryLoop);
*/

/*
function userTry() {
userNumber = parseInt(prompt('Choose a number'));
}
*/

function findNumber() {

var misteryNumber = Math.floor(Math.random() * Math.floor(9));


//userTry();
var userTry = parseInt(prompt('Choose a number'));



  if (misteryNumber > userTry) {

    console.log('it\'s over')

var userTry = parseInt(prompt('Choose a number 2'));


      // nested if 1
          if (misteryNumber > userTry) {
            console.log('it is over')
            var userTry = parseInt(prompt('Choose a number 3'));
          } else if (misteryNumber < userTry) {
            var userTry = parseInt(prompt('Choose a number 3'));
            console.log('it is under');
          } else {
            console.log('you right !');
          }

                // last chance
                if (userTry == misteryNumber) {
                  console.log('Wow');
                } else {
                  console.log('U loose');
                }

} else if (misteryNumber < userTry) {

    console.log('it\'s under')
    //userTry();
var userTry = parseInt(prompt('Choose a number 2'));


// nested if 1
    if (misteryNumber > userTry) {
      console.log('it is over')
      var userTry = parseInt(prompt('Choose a number 3'));
    } else if (misteryNumber < userTry) {
      console.log('it is under');
      var userTry = parseInt(prompt('Choose a number 3'));
    } else {
      console.log('you right !');
    }

    // last chance
    if (userTry == misteryNumber) {
      console.log('Wow');
    } else {
      console.log('U loose');
    }


  } else {
    console.log('Right')
  }
};

findNumber();
