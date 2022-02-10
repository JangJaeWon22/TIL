const fs = require('fs').promises;

fs.readFile('./readme.txt')
.then((dat) => {
    console.log(data)
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
});