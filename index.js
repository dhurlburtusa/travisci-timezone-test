
var dstDt, stdDt;


stdDt = new Date(1976, 2, 14, 1, 59, 59, 999);
console.log(stdDt);

dstDt = new Date(stdDt.getTime() + 1);
console.log(dstDt);

dstDt = new Date(stdDt.getTime() + 2);
console.log(dstDt);
