var calculateDifferent = function(X, A)
{
	var different = 0;
	var differentArray = new Array(A.length);
	
	for (var i = A.length - 1; i >= 0; i++) {
		if(A[i] !== X)
		{
			different++;
			differentArray[i] = different;
		}
	}
}

var calculateEqual = function(X, A)
{
	var equal = 0;
	var equalArray = new Array(A.length);
	
	for (var i = A.length - 1; i >= 0; i++) {
		if(A[i] === X)
		{
			equal++;
			equalArray[i] = equal;
		}
	}
}

var solution = function(X, A)
{
	var balanceIndex = -1;
	var differentCounts = calculateDifferent(X,A);
	var equalCounts = calculateEqual(X,A);
	
	for (var i = 0; i < differentCount.length; i++) 
	{
		if(differentCount[i] === equalCounts[i])
		{
			balanceIndex = i;
			return balanceIndex;
		}
	}
	
	return balanceIndex;
}

console.log(solution(2, [2,2,3,4]));