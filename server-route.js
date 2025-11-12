const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => 
{
    const url = req.url;
    const method = req.method;
    switch (url)
    {
        case "/" :
           res.statusCode = 200; // 200 est un status
           res.setHeader('Content-Type', "text/html ; charset=utf-8");

           res.end(
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                 <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Index</title>
                </head>
                <body>
                    <h1>COUCOU</h1>
                </body>
                </html>`
                );
        break;

        case "/contact":
           res.statusCode = 200; // 200 est un status
           res.setHeader('Content-Type', "text/html , charset=utf-8");
           res.end(
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                 <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact</title>
                </head>
                <body>
            
                </body>
                </html>`
                );
        break;

        case "/a-propos":
           res.statusCode = 200; // 200 est un status
           res.setHeader('Content-Type', "text/html, charset=utf-8");
           res.end(
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                 <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>À propos</title>
                </head>
                <body>
                    
                </body>
                </html>`
                );
        break;

        case "/deja-fait":
           res.statusCode = 200; // 200 est un status
           res.setHeader('Content-Type', "text/html , charset=utf-8");
           res.end(
            `<!DOCTYPE html>
                <html lang="en">
                <head>
                 <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Déjà fait</title>
                </head>
                <body>
            
                </body>
                </html>`
                );
        break;

        case "/api/data":
            res.setHeader('Content-Type', "application/json");
            const datas = 
            {
                "message de l'api": "coucou",
                timestamp: new Date().toISOString(),
                server: "nodejs"          
            };
            res.end(JSON.stringify(datas));
        break;

        default :
            res.status = 404;
            return res.end("Not found"); //Not found login page

    };

});

server.listen(3001);