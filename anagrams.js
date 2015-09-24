var compare = function(string1, string2)
{
    return string1 > string2;
}

var sort = function(letterArray)
{
    return letterArray.sort(compare);
}

var getKey = function(word)
{
    var letterArray = word.split('');
    var sorted = sort(letterArray);
    var key = sorted.join('');

    return key;
};

var getAnagrams = function(word,callback)
{
    var dictionary = {};
    var path = require('path');

    var filePath = path.join(__dirname, "data", "anagrams.txt");

    var rl = require('readline').createInterface({
        terminal:false,
        input: require('fs').createReadStream(filePath)
    });

    rl.on('line', function (line) {
        console.log('Line from file:', line);

        var key = getKey(line);

        if(dictionary[key] == null)
        {
            dictionary[key] = {};
        }

        dictionary[key][line] = true;
    });

    rl.on('close', function()
    {
        var key = getKey(word);
        var anagrams = dictionary[key];
        if(anagrams === null)
        {
            callback([]);
        }
        else
        {
            var words = Object.keys(anagrams);
            callback(words);
        }
    });
};

getAnagrams("aijasus", function(result){
    console.log(result);
});




