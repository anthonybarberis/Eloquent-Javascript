let loopingATriangle = function () {
    let triangle = '#######';
    for (let i = 0; i < triangle.length; i++) {
        console.log(triangle.substr(0, i + 1));
    }
}

// loopingATriangle();