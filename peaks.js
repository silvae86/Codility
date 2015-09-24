var forest = {};

var buildTree = function(A,blockSize,tree)
{
    var peakLocation = tree[root];
    for(var i = 0; i <= blockSize; i-=2)
    {
        var start = peakLocation - Math.floor(blockSize / 2);
        var end = peakLocation + Math.floor(blockSize / 2);
        var block = A.slice(start,end);

        if(block[0] < block[1] && block[i-2] > block[i-1])
        {

        }
    }
}

var detectPeaks = function(A,blockSize)
{
    var peaks = [];

    for(var i = 1; i < A.length; i++)
    {
        if(A[i] > A[i-1] && A[i] < A[i+1])
        {
            forest[i] = {
                root : i,
                left : [i -1],
                right: [i + 1]
            };
            peaks.push(i);
        }
    }

    for(var root in Object.keys(forest))
    {
        var tree = forest[root];

        buildTree(A, blockSize, tree);
    }

    return peaks;
};

var solution = function(A)
{
    var peaks = detectPeaks(A);

    if(A.length < 3)
    {
        return [];
    }
    else
    {

    }
};

A = [1,2,3,4,3,4,1,2,3,4,6,2];