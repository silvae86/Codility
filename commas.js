//100000
//100,000

var reverse = function(string)
{
    return string.split('').reverse().join('');
}

var putCommas = function(nNumber)
{
    //1 234 567
    var n = nNumber.toString();

    //765 432 1
    n = reverse(n);
    //console.log("Reversed: " + n);

    var slices = [];

    while(n.length > 3)
    {
        var front = n.substr(0,3);
        n = n.substr(3,n.length - 3);


        var reversed = reverse(front);

        slices.push(reversed);
    }

    if(n.length > 0)
    {
        slices.push(n);
    }

    slices = slices.reverse();

    //console.log(slices);

    var result = "";

    for (var i = 0; i < slices.length; i++) {
        result += reverse(slices[i]);
        if(i < slices.length - 1)
        {
            result += ",";
        }

    }

    return result;
}

console.log("For 1: " + putCommas(1));
console.log("For 10: " + putCommas(10));
console.log("For 100: " + putCommas(100));
console.log("For 1000000: " + putCommas(1000000));
console.log("For 123456789: " + putCommas(123456789));
console.log("For 123456789: " + putCommas(1000));
console.log("For 12981928918: " + putCommas(12981928918));
