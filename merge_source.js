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
  fs.readFile(inputFile2, 'utf8', (err2, data2) => {
    if (err2) {
      console.error('Error reading input file:2', err2);
      return;
    }

  // Split data into lines
  const lines = data.trim().split('\n');

  // Split data2 into lines
    console.warn("Split data2 into lines");
    const lines2 = data2.trim().split('\n');

  // Open  output file
  const outputStream = fs.createWriteStream(outputFile);
  // outputStream.flush();
  lines.forEach(line => {
    if (line == 'DICT_GOES_HERE') {
        // write dict.js to output file
        // for (const line2 in lines2) {
        lines2.forEach(line2 => {
          outputStream.write(line2+`\n`);  
          console.log('Writing data line', line2);  
        });
    } else {
      console.log('Writing HTML line', line);  
      outputStream.write(line+`\n`);
      // outputStream.flush();
    }
  });

  // Close output stream
  outputStream.end();
  console.log('Lines written to output file successfully.');
});
});
