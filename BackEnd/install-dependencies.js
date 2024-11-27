const fs = require('fs');
const { exec } = require('child_process');

fs.readFile('requirements.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading requirements.txt:', err);
        return;
    }

    const dependencies = data.split('\n').filter(Boolean);
    const installCommand = `npm install ${dependencies.join(' ')}`;

    exec(installCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error installing dependencies: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
});