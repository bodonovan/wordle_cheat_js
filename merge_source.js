const fs = require('fs');

// Input file path
const inputFile = 'source_index.html';
const inputFile2 = 'dict.js';
// Output file path
const outputFile = 'index.html';

// Read input file line by line
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  // Split data into lines
  const lines = data.trim().split('\n');

  // Write lines to output file
  const outputStream = fs.createWriteStream(outputFile);
  lines.forEach(line => {
    if (line == 'DICT_GOES_HERE') {
      // outputStream.write(`here goes something\n`);
      fs.readFile(inputFile2, 'utf8', (err, data2) => {
        if (err) {
          console.error('Error reading input file:2', err);
          return;
        }
      
        // Split data into lines
        const lines2 = data2.trim().split('\n');

        // whrite to output file
        for (const line2 in lines2) {
          outputStream.write(line2+`\n`);    
        }
      });
      
    } else {
      outputStream.write(line+`\n`);
    }
  });

  // Close output stream
  outputStream.end();

  console.log('Lines written to output file successfully.');
});
