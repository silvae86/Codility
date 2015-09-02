// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

var sort = function(arr)
{
    var compareTo = function(num1, num2)
    {
        return num1 - num2;
    }

    return arr.slice(0).sort(compareTo);
}


function solution(A) {
    //console.log("Testing " + A);
    var nonDivisors = new Array(A.length);
    var sorted = sort(A);

    sorted.reverse();

    var sortedNonDivisors = {};


    for (var i = 0; i < sorted.length; i++)
    {
        if(sortedNonDivisors[sorted[i]] != null)
        {
            //sortedNonDivisors[sorted[i]]++;
        }
        else
        {
            var nonDivisorsCount = 0;

            for(var j = i; j < sorted.length; j++)
            {
                if(sorted[i] % sorted[j] !== 0)
                {
                    nonDivisorsCount++;
                }
            }

            sortedNonDivisors[sorted[i]] = nonDivisorsCount + i;
        }
    }

    for(var i = 0; i < A.length; i++)
    {
        nonDivisors[i] = sortedNonDivisors[A[i]];
    }

    return nonDivisors;
}

//A = [3,1,2,3,6];

//console.log(solution(A));