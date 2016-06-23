
var dstDt, stdDt;

function createDt(dateParts) {
  var dp = dateParts;
  return new Date(dp[0], dp[1], dp[2], dp[3], dp[4], dp[5], dp[6]);
}

function print(dt) {
  console.log(dt.getTimezoneOffset());
  console.log(dt);
  console.log(dt.toString());
  console.log(dt.toISOString());
}

stdDt = new Date(1976, 2, 14, 1, 59, 59, 999);
print(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
print(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
print(dstDt);


stdDt = new Date(1976, 2, 21, 1, 59, 59, 999);
print(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
print(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
print(dstDt);


stdDt = new Date(1976, 2, 28, 1, 59, 59, 999);
print(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
print(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
print(dstDt);


stdDt = new Date(1976, 3, 4, 1, 59, 59, 999);
print(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
print(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
print(dstDt);


stdDt = new Date(1976, 3, 11, 1, 59, 59, 999);
print(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
print(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
print(dstDt);


stdDt = new Date(1976, 3, 18, 1, 59, 59, 999);
print(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
print(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
print(dstDt);


stdDt = new Date(1976, 3, 25, 1, 59, 59, 999);
print(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
print(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
print(dstDt);

var testDates = [
    [2016,  0, 1, 2, 3, 4, 5],
    [2016,  1, 1, 2, 3, 4, 5],
    [2016,  2, 1, 2, 3, 4, 5],
    [2016,  3, 1, 2, 3, 4, 5],
    [2016,  4, 1, 2, 3, 4, 5],
    [2016,  5, 1, 2, 3, 4, 5],
    [2016,  6, 1, 2, 3, 4, 5],
    [2016,  7, 1, 2, 3, 4, 5],
    [2016,  8, 1, 2, 3, 4, 5],
    [2016,  9, 1, 2, 3, 4, 5],
    [2016, 10, 1, 2, 3, 4, 5],
    [2016, 11, 1, 2, 3, 4, 5],
];

for (var i = 0, iLen = testDates.length; i < iLen; ++i) {
  var dt = createDt(testDates[i]);
  print(dt);
}
