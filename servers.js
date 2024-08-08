const https = require('https');
const port = 3000;
const servers = https.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Bonjour node !!!!</h1>\n');
});
const PORT = 3000;
servers.listen(port, () => {
    console.log(`Server running at https://localhost:${port}/`);
});