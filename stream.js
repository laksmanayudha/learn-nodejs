const fs = require('fs');

// readable stream
const readableStream = fs.createReadStream('./notes.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {

    }
});

readableStream.on('end', () => {
    console.log('done');
});

// writeable stream
const writeableStream = fs.createWriteStream('output.txt');
writeableStream.write('Ini merupakan teks baris pertama!\n');
writeableStream.write('Ini merupakan teks baris kedua!\n');
writeableStream.end('Akhir dari writeable stream!');