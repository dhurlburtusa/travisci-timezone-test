# Results

## #1

### Travis Config

```yml
language: node_js
node_js:
  - "5"
```

### Script

```javascript
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
```

### Output
```
Sun Mar 14 1976 01:59:59 GMT+0000 (UTC)
0
Sun Mar 14 1976 02:00:00 GMT+0000 (UTC)
0
Sun Mar 14 1976 02:00:00 GMT+0000 (UTC)
0
```

## #2

### Travis Config

```yml
language: node_js
node_js:
  - "5"
env:
  - TZ=America/Denver
```

### Script

```javascript
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
```

### Output
```
Sun Mar 14 1976 01:59:59 GMT-0700 (MST)
420
Sun Mar 14 1976 02:00:00 GMT-0700 (MST)
420
Sun Mar 14 1976 02:00:00 GMT-0700 (MST)
420
```

### Comments

It appears that just setting the timezone doesn't set whether or not DST is honored.  I will research how to turn DST on and report back.
