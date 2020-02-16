// 2.37

let loopingATriangle = function () {
    let triangle = '#######';
    for (let i = 0; i < triangle.length; i++) {
        console.log(triangle.substr(0, i + 1));
    }
}

let fizzBuzz = function () {
    for (let checkNumber = 1; checkNumber <= 100; checkNumber++) {
        if (checkNumber % 3 == 0 && checkNumber % 5 == 0) {
            console.log('FizzBuzz');
        } else if (checkNumber % 3 == 0) {
            console.log('Fizz');
        } else if (checkNumber % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(checkNumber);
        }
    }
}

let chessboard = function (gridSize) {
    let board = "";
    for (let rowNum = 0; rowNum < gridSize; rowNum++) {
        if (rowNum % 2 == 0) {
            var pattern = " #";
        } else {
            var pattern = "# ";
        }
        board += pattern.repeat(gridSize/2);
        board += '\n';
    }
    console.log(board)
}