// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
    var eaten = {};

    var currentChocolate = 0;

    while(!eaten[currentChocolate])
    {
        eaten[currentChocolate] = true;

        currentChocolate += M;

        currentChocolate = currentChocolate % N;
    }

    var eatenIndexes = Object.keys(eaten);

    return eatenIndexes.length;
}

//console.log(solution(4,2));