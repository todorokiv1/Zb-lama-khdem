const express = require("express");
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 2000;

const server = app.listen(PORT, () => {
  console.log('Your app is listening on port ' + PORT);
  console.log("I'm Ready To Work..! 24H");
});

app.get('/', (req, res) => {
  res.send(`
    <body>
      <center><h1>Bot 24H ON!</h1></center>
    </body>
  `);
});

exec('concurrently "node command.js" "node answer.js"', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

process.on('SIGINT', () => {
  console.log('Server shutting down...');
  server.close(() => {
    console.log('Server shut down successfully.');
    process.exit(0);
  });
});
