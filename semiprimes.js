var getSieve = function(N)
{
    var sieve = [];
    var i;

    for(i = 0; i < N; i++)
    {
        sieve[i] = true;
    }

    sieve[0] = false;
    sieve[1] = false;

    for(i = 2; i * i < N; i++)
    {
        if(sieve[i])
        {
            for(var k = 1; i + k*i < N; k++)
            {
                sieve[i+ k*i] = false;
            }

        }
    }

    return sieve;
};

var getNextPrime = function(sieve, X)
{
    for(var i = X + 1; i < sieve.length; i++)
    {
        if(sieve[i])
        {
            return i;
        }
    }

    return null;
};

function solution(N, P, Q)
{
    var len = P.length;
    var semiPrimesCount = [];
    var sieve = getSieve(N+1);
    var prime1, prime2;

    for (var i = 0; i < len; i++)
    {
        semiPrimesCount[i] = 0;

        for(var j = P[i]; j < Q[i]; j++)
        {
            prime1 = 2;
            prime2 = 2;

            while(prime1 * prime2 <= N)
            {
                if(prime1 * prime2 == j)
                {
                    semiPrimesCount[i]++;
                }

                prime1 = getNextPrime(sieve,prime1,Q[i]);

                if(prime1 * prime2 == j)
                {
                    semiPrimesCount[i]++;
                }

                prime2 = getNextPrime(sieve,prime2,Q[i]);

                if(prime1 * prime2 == j)
                {
                    semiPrimesCount[i]++;
                }
            }
        }
    }

    return semiPrimesCount;
}

var N = 6;
var P = [1,4,16];
var Q = [6,10,20];

console.log(solution(N,P,Q));
