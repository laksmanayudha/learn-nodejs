const fs = require('fs');
const path = require('path');

fs.readFile('notes.txt', 'UTF-8', (error, data) => {
    if (error) {
        console.log('Gagal membaca data');
        return;
    }

    console.log(data);
    console.log(path.resolve(__dirname, 'notes.txt'));
});