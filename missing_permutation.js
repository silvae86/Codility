// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var sort = function(A)
    {
        var compareInts = function(intA, intB)
        {
            return intA - intB
        }

        return A.slice(0).sort(compareInts);
    }

    var last = function(A)
    {
        if(A.length === 0)
        {
            return null;
        }
        else
        {
            return A[A.length - 1];
        }
    }

    var first = function(A)
    {
        if(A.length === 0)
        {
            return null;
        }
        else
        {
            return A[0];
        }
    }

    var sorted = sort(A);

    if(sorted.length === 0)
    {
        return 1;
    }
    else if(sorted.length == 1)
    {
        if(sorted[0] === 1)
        {
            return 2;
        }
        else if(sorted[0] === 2)
        {
            return 1;
        }
        else
        {
            return 1;
        }
    }
    else if(sorted.length == 2)
    {
        if(sorted[0] === 1 && sorted[1] == 3)
        {
            return last(sorted) + 1;
        }
        else if(sorted[0] === 2 && sorted[1] == 3)
        {
            return 1;
        }
    }
    else
    {
        for(var i = 1; i < sorted.length; i++)
        {
            var previous = sorted[i-1];
            var current = sorted[i];

            if(current - previous > 1)
            {
                return current - 1;
            }
        }

        if(first(sorted) === 1)
        {
            return sorted.length;
        }
        else if(first(sorted) === 2)
        {
            return 1;
        }
    }
}

var debug = true;

if(debug)
{
    A = [2, 3, 1, 5];
    console.log(solution(A));
    A = [];
    console.log(solution(A));
    A = [0];
    console.log(solution(A));
    A = [1];
    console.log(solution(A));
    A = [2];
    console.log(solution(A));
    A = [1,3];
    console.log(solution(A));
    A = [2,3];
    console.log(solution(A));
    A = [2,3,4];
    console.log(solution(A));
    A = [1,2,4];
    console.log(solution(A));
}
