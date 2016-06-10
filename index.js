
var dstDt, stdDt;


stdDt = new Date(1976, 2, 14, 1, 59, 59, 999);
console.log(stdDt);
console.log(stdDt.getTimezoneOffset());

dstDt = new Date(stdDt.getTime() + 1);
console.log(dstDt);
console.log(dstDt.getTimezoneOffset());

dstDt = new Date(stdDt.getTime() + 2);
console.log(dstDt);
console.log(dstDt.getTimezoneOffset());
