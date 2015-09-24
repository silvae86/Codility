/**
 * GCD(a,0) = a;
 * GCD(a,b) = GCD(b, a % b);
 * @param a
 * @param b
 * @returns {*}
 */

var gcd = function(a, b)
{
    if(b == 0)
    {
        return a;
    }
    else
    {
        return gcd(b, a % b);
    }
};

var lcm = function(a, b)
{
    var greatestCommonDenominator = gcd(a,b);

    return a * b / greatestCommonDenominator;
};

console.log(gcd(12312121232,24238974232));
console.log(lcm(2,3));

//1/8 ->  // 5 * 4
//1/12 -> 20 // 4 * 5