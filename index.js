
var dstDt, stdDt;

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
