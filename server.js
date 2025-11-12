const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
 if (req.url==="/"&& req.method==='GET') { // "/" racine du dossier
    res.writeHead(200, { 'Content-Type': "text/html ; charset=utf-8"});
    return res.end(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Découverte</title>
        </head>
        <body>
            
        </body>
        </html>`
    );
} 
    res.writeHead(404);
    return res.end("Not found"); //Not found login page
});

server.listen(3000);
