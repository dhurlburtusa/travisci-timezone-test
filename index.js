
var dstDt, stdDt;

function createDt(dateParts) {
  var dp = dateParts;
  return new Date(dp[0], dp[1], dp[2], dp[3], dp[4], dp[5], dp[6]);
}

function printIntlDateFormatInfo() {
  var info = { timeZone: 'unknown' },
      format;
  
  if (Intl && typeof Intl.DateTimeFormat == 'function') {
    format = Intl.DateTimeFormat();
    
    if (format) {
      if (typeof format.resolvedOptions == 'function') {
        console.log('This JS env uses the standard Intl.DateTimeFormat#resolvedOptions method.');
        info = format.resolvedOptions();
      } else if (format.resolved) {
        console.log('This JS env uses the non-standard Intl.DateTimeFormat#resolved property.');
        info = format.resolved;
      }
    }
  }
  console.dir(info);
}

function print(dt) {
  console.log('Timezone Offset: ' + dt.getTimezoneOffset());
  console.log('toDateString: ' + dt.toDateString());
  console.log('toGMTString: ' + dt.toGMTString());
  console.log('toISOString: ' + dt.toISOString());
  console.log('toString: ' + dt.toString());
  console.log('toTimeString: ' + dt.toTimeString());
  console.log('toUTCString: ' + dt.toUTCString());
}

// stdDt = new Date(1976, 2, 14, 1, 59, 59, 999);
// print(stdDt);

// dstDt = new Date(stdDt.getTime() + 1);
// print(dstDt);

// dstDt = new Date(stdDt.getTime() + 2);
// print(dstDt);


// stdDt = new Date(1976, 2, 21, 1, 59, 59, 999);
// print(stdDt);

// dstDt = new Date(stdDt.getTime() + 1);
// print(dstDt);

// dstDt = new Date(stdDt.getTime() + 2);
// print(dstDt);


// stdDt = new Date(1976, 2, 28, 1, 59, 59, 999);
// print(stdDt);

// dstDt = new Date(stdDt.getTime() + 1);
// print(dstDt);

// dstDt = new Date(stdDt.getTime() + 2);
// print(dstDt);


// stdDt = new Date(1976, 3, 4, 1, 59, 59, 999);
// print(stdDt);

// dstDt = new Date(stdDt.getTime() + 1);
// print(dstDt);

// dstDt = new Date(stdDt.getTime() + 2);
// print(dstDt);


// stdDt = new Date(1976, 3, 11, 1, 59, 59, 999);
// print(stdDt);

// dstDt = new Date(stdDt.getTime() + 1);
// print(dstDt);

// dstDt = new Date(stdDt.getTime() + 2);
// print(dstDt);


// stdDt = new Date(1976, 3, 18, 1, 59, 59, 999);
// print(stdDt);

// dstDt = new Date(stdDt.getTime() + 1);
// print(dstDt);

// dstDt = new Date(stdDt.getTime() + 2);
// print(dstDt);


// stdDt = new Date(1976, 3, 25, 1, 59, 59, 999);
// print(stdDt);

// dstDt = new Date(stdDt.getTime() + 1);
// print(dstDt);

// dstDt = new Date(stdDt.getTime() + 2);
// print(dstDt);

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
  console.log('');
}

printIntlDateFormatInfo();
