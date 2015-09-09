// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



function solution(X, Y, D) {
    var jump = D;
    var start = X;
    var end = Y;

    var distance = end-start;

    if(distance === 0)
    {
        return 0;
    }
    else
    {
        var wholeJumps = Math.floor(distance / jump);
        var extraJump = distance % jump;

        if(extraJump > 0)
        {
            wholeJumps++;
        }

        return wholeJumps;
    }
}

var debug = false;
if(debug)
{
    console.log(solution(10,85,30));
    console.log(solution(10,10,30));
    console.log(solution(10,20,30));
    console.log(solution(10,20,10));
    console.log(solution(10,20,5));
    console.log(solution(10,20,3));
}
