var sieve = function(n)
{
    var sieve = {};

    sieve[0] = false;
    sieve[1] = false;

    var k;

    //mais rapido que while i <= sqrt(n)
    for(var i = 2; i * i <= n; i++)
    {
        if(sieve[i])
        {
            k = i * i;
            while(k <= n)
            {
                sieve[k] = false;
                k++;
            }
        }
    }

    return sieve;
}