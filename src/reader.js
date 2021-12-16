const { createInterface } = require('readline');
const info = require('../info.json');

const reader = createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = { reader, info };