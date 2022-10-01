const spawn = require('child_process').spawn;
const iconv = require('iconv-lite');
const result = spawn('python', ['d.py']);
let rs
result.stdout.on('data', function (data) {
    rs = iconv.decode(data, 'euc-kr');
    console.log(rs);
});
result.stderr.on('data', function (data) {
    rs = iconv.decode(data, 'euc-kr');
    console.log(rs);
});

//npm install iconv