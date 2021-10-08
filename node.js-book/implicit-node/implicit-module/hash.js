const crypto = require('crypto');

console.log('base64 : ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex : ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64 : ', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

// createHash(알고리즘) : 사용할 해시 알고리즘(sha512) -- md5, sha1, sha256, sha512 등이 있음
// ------------------------------ md5, sha1은 취약점이 발견되었음.
// update : 변환할 문자열
// digset : 인코딩할 알고리즘(base64가 가장 짧아 애용하는 사람이 많음) base64, hex, latin1 등이 있음

//pbkdf2 ==> 기존문자열에서 salt라고 불리는 문자영르 분인 후 해시 알고리즘을 반복시킴.
crypto.randomBytes(64, (err,buf) => {
    const salt = buf.toString('base64');
    console.log('salt : ', salt);
    //pbkdf2(비밀번호, salt, 반복 횟수, 출력 바이트, 해시알고리즘)
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password : ', key.toString('base64'));
    });
});
// -> 64바이트 길이의 문자열을 만드는데 sha512의 결과값을 다시 sha512로 10만번 반복함.